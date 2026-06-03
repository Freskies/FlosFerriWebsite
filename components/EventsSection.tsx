'use client';

import { useEvents } from '@/hooks/use-events';
import React, { useMemo } from "react";
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useSmoothHeight } from '@/hooks/use-smooth-height';

import { useTranslations, useLocale } from 'next-intl';
import { EventCard } from "@/components/EventCard";

export default function EventsSection () {
	const t = useTranslations('Events');
	const locale = useLocale();
	const {
		visibleEvents,
		nextBatch,
		isLoading,
		isPrefetching,
		loadMore
	} = useEvents();

	const isMounted = useIsMounted();

	const today = useMemo(() => new Date().toISOString().split('T')[0], []);
	const futureEvents = useMemo(() => isMounted ? visibleEvents.filter(e => e.date >= today) : [], [isMounted, visibleEvents, today]);
	const pastEvents = useMemo(() => isMounted ? visibleEvents.filter(e => e.date < today) : [], [isMounted, visibleEvents, today]);

	const containerRef = useSmoothHeight([visibleEvents]);

	if (!isMounted || (isLoading && visibleEvents.length === 0)) {
		return (
			<div className="space-y-12">
				<div className="flex justify-center py-12">
					<div className="animate-pulse text-gold">{t('loading')}</div>
				</div>
			</div>
		);
	}

	if (visibleEvents.length === 0 && !isLoading) {
		return null;
	}

	return (
		<div className="space-y-12">
			<div ref={containerRef} className="space-y-12 overflow-hidden">
				{/* Future Events Grid */}
				{futureEvents.length > 0 && (
					<div
						className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto">
						{futureEvents.map((event, index) => (
							<EventCard key={event.id} event={event} locale={locale} index={index}/>
						))}
					</div>
				)}

				{/* Past Events Section */}
				{pastEvents.length > 0 && (
					<div className="space-y-12">
						<div className="flex flex-col items-center py-12 animate-fade-in-up">
							<div className="h-px w-24 bg-gold/30 mb-8"/>
							<h3 className="font-display text-3xl text-gold uppercase tracking-[0.2em]">
								{t('past_events')}
							</h3>
						</div>

						<div
							className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl mx-auto">
							{pastEvents.map((event, index) => (
								<EventCard key={event.id} event={event} locale={locale} index={index}/>
							))}
						</div>
					</div>
				)}
			</div>

			{(nextBatch !== null || isPrefetching) && (
				<div className="flex justify-center">
					<button
						onClick={loadMore}
						disabled={isPrefetching && !nextBatch}
						className="bg-iron border border-primary/40 text-gold font-display uppercase tracking-[0.2em] text-sm px-10 py-4 rounded-sm hover:bg-primary/10 transition cursor-pointer font-bold shadow-forged disabled:opacity-50"
					>
						{isPrefetching && !nextBatch ? t('loading_more') : t('show_more')}
					</button>
				</div>
			)}
		</div>
	);
}
