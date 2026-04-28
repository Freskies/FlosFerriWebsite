import { NextResponse } from 'next/server';
import eventsData from '@/data/events.json';

export async function GET (request: Request) {
	const { searchParams } = new URL(request.url);
	const page = parseInt(searchParams.get('page') || '1');
	const limit = parseInt(searchParams.get('limit') || '4');
	const type = searchParams.get('type') || 'future'; // 'future' or 'past'

	const today = new Date().toISOString().split('T')[0];

	const futureEvents = eventsData
		.filter(e => e.date >= today)
		.sort((a, b) => a.date.localeCompare(b.date));

	const pastEvents = eventsData
		.filter(e => e.date < today)
		.sort((a, b) => b.date.localeCompare(a.date));

	const targetArray = type === 'future' ? futureEvents : pastEvents;

	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;
	const eventsSlice = targetArray.slice(startIndex, endIndex);

	const hasNextPage = endIndex < targetArray.length;

	return NextResponse.json({
		events: eventsSlice,
		hasNextPage,
		nextPage: hasNextPage ? page + 1 : null
	});
}
