import { useSyncExternalStore, useEffect } from 'react';

/**
 * Represents a historical or upcoming event.
 */
export interface Event {
	id: string;
	title: Record<string, string>;
	description: Record<string, string>;
	date: string;
	endDate?: string;
	time?: Record<string, string> | string;
	location: string;
	category: Record<string, string>;
	image: string;
}

/**
 * Response format for the event_covers API.
 */
export interface EventsResponse {
	events: Event[];
	hasNextPage: boolean;
	nextPage: number | null;
}

export type EventType = 'future' | 'past';

interface EventsState {
	type: EventType;
	visibleEvents: Event[];
	nextBatch: Event[] | null;
	hasNextPage: boolean;
	nextPage: number | null;
	isLoading: boolean;
	isPrefetching: boolean;
}

let state: EventsState = {
	type: 'future',
	visibleEvents: [],
	nextBatch: null,
	hasNextPage: false,
	nextPage: null,
	isLoading: false,
	isPrefetching: false,
};

const listeners = new Set<() => void>();

function subscribe (listener: () => void) {
	listeners.add(listener);
	return () => listeners.delete(listener);
}

function getSnapshot () {
	return state;
}

function emitChange () {
	for (const listener of listeners)
		listener();
}

function setState (nextState: Partial<EventsState>) {
	state = { ...state, ...nextState };
	emitChange();
}

async function fetchEvents (page: number, eventType: EventType): Promise<EventsResponse> {
	const res = await fetch(`/api/events?page=${page}&limit=4&type=${eventType}`);
	if (!res.ok) throw new Error('Failed to fetch event_covers');
	return res.json();
}

async function init (type: EventType) {
	setState({
		type,
		isLoading: true,
		visibleEvents: [],
		nextBatch: null,
		hasNextPage: false,
		nextPage: null
	});

	try {
		const data = await fetchEvents(1, type);
		if (state.type !== type) return;

		setState({
			visibleEvents: data.events,
			hasNextPage: data.hasNextPage,
			nextPage: data.nextPage,
			isLoading: false
		});

		await prefetchNext(type, data.hasNextPage, data.nextPage);
	} catch (error) {
		console.error(error);
		setState({ isLoading: false, isPrefetching: false });
	}
}

async function prefetchNext (currentType: EventType, hasNext: boolean, nextP: number | null) {
	let nextBatchData: Event[] | null = null;
	let finalHasNextPage = hasNext;
	let finalNextPage = nextP;

	if (hasNext && nextP) {
		setState({ isPrefetching: true });
		try {
			const data = await fetchEvents(nextP, currentType);
			if (state.type !== currentType) return;
			nextBatchData = data.events;
			finalHasNextPage = data.hasNextPage;
			finalNextPage = data.nextPage;
		} catch (e) { console.error(e); }
	} else if (currentType === 'future') {
		setState({ isPrefetching: true });
		try {
			const data = await fetchEvents(1, 'past');
			if (state.type !== 'future') return;
			nextBatchData = data.events;
			finalHasNextPage = data.hasNextPage;
			finalNextPage = data.nextPage;
		} catch (e) { console.error(e); }
	}

	setState({
		nextBatch: nextBatchData,
		hasNextPage: finalHasNextPage,
		nextPage: finalNextPage,
		isPrefetching: false
	});
}

// Automatic initialization is removed from module scope to avoid hydration mismatch
// Use useEffect in useEvents instead

/**
 * Custom hook for managing event data, pagination, and prefetching.
 * Uses `useSyncExternalStore` for optimized state management and background prefetching (double buffering).
 *
 * @returns An object containing the current event_covers state and control functions.
 */
export function useEvents () {
	const currentState = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

	useEffect(() => {
		if (state.visibleEvents.length === 0 && !state.isLoading) {
			init('future').then(() => null);
		}
	}, []);

	const setType = (type: EventType) => {
		if (type !== state.type)
			init(type).then(() => null);
	};

	const loadMore = async () => {
		if (!state.nextBatch) return;

		const currentType = state.type;
		const currentHasNextPage = state.hasNextPage;
		const wasFutureTransitioningToPast = currentType === 'future' && !currentHasNextPage;

		const nextVisibleEvents = [...state.visibleEvents, ...state.nextBatch];

		setState({
			visibleEvents: nextVisibleEvents,
			nextBatch: null,
			type: wasFutureTransitioningToPast ? 'past' : currentType
		});

		await prefetchNext(state.type, state.hasNextPage, state.nextPage);
	};

	return {
		...currentState,
		setType,
		loadMore
	};
}
