'use client';

import Image from 'next/image';
import { useEvents, Event } from '@/hooks/use-events';
import React, { useMemo } from "react";
import { calculateDurationDays } from "@/lib";
import { useIsMounted } from '@/hooks/use-is-mounted';
import { useSmoothHeight } from '@/hooks/use-smooth-height';

export default function EventsSection ({ locale }: { locale: string }) {
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
					<div className="animate-pulse text-gold">Caricamento eventi...</div>
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
								{locale === 'it' ? 'Eventi Passati' : 'Past Events'}
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
						{isPrefetching && !nextBatch ? (locale === 'it' ? 'Caricamento...' : 'Loading...') : (locale === 'it' ? 'Mostra altri eventi' : 'Show more events')}
					</button>
				</div>
			)}
		</div>
	);
}

function EventCard ({ event, locale, index }: { event: Event, locale: string, index: number }) {
	const dateObj = new Date(event.date + "T00:00:00");
	const day = dateObj.getDate();
	const monthShort = dateObj.toLocaleDateString(locale, { month: 'short' }).toUpperCase();
	const year = dateObj.getFullYear();
	const durationDays = event.endDate ? calculateDurationDays(event.date, event.endDate) : 0;

	const title = event.title[locale] || event.title['en'];
	const description = event.description[locale] || event.description['en'];
	const category = event.category[locale] || event.category['en'];
	const time = event.time
		? (typeof event.time === 'string' ? event.time : (event.time[locale] || event.time['en']))
		: null;

	const position = index % 4;

	return (
		<article
			className={`
				group relative flex flex-col overflow-hidden rounded-sm border border-border/70 bg-card shadow-forged transition-[transform,border-color] duration-300 hover:border-primary/60 hover:-translate-y-1 animate-fade-in-up will-change-transform
				
				/* Layout SM: Quasi tutto lo schermo, altezza fissa */
				w-[95%] mx-auto h-112.5 
				
				/* Layout MD: Reset larghezza, 2 colonne (gestito dal parent), stessa altezza */
				md:w-full md:h-112.5 

				/* Layout LG: Griglia complessa */
				lg:h-full lg:min-h-112.5
				${position === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
				${position === 1 ? 'lg:col-span-1 lg:row-span-2' : ''}
				${position === 2 ? 'lg:col-span-1 lg:row-span-1' : ''}
				${position === 3 ? 'lg:col-span-2 lg:row-span-1' : ''}
			`}
			style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)', transformStyle: 'preserve-3d' }}
		>
			<div className="relative overflow-hidden grow bg-card">
				<Image
					src={event.image}
					alt={title}
					fill
					sizes="(max-width: 768px) 95vw, (max-width: 1024px) 50vw, 33vw"
					className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform scale-[1.01]"
				/>
				<div
					className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent pointer-events-none z-1"/>
				<div
					className="absolute top-4 left-4 bg-iron border border-primary/50 rounded-sm px-3 py-2 text-center shadow-forged min-w-18 z-10">
					<div className="font-display text-3xl text-gold leading-none font-bold">{day}</div>
					<div className="text-xs uppercase tracking-widest text-muted-foreground mt-1 font-semibold">
						{monthShort} {year}
					</div>
					{durationDays > 1 && (
						<div
							className="text-[11px] uppercase tracking-tighter text-gold/80 mt-1.5 pt-1.5 border-t border-primary/20 font-bold">
							{durationDays} {locale === 'it' ? 'Giorni' : 'Days'}
						</div>
					)}
				</div>
				<span
					className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm z-10 font-bold">
					{category}
				</span>
			</div>
			<div className="p-5 space-y-3 bg-card relative z-2">
				<h3 className="font-display text-xl text-gold tracking-wide font-bold line-clamp-1">{title}</h3>
				<div
					className="flex flex-wrap gap-x-5 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
					<span>⌖ {event.location}</span>
					{time && <span>⏱ {time}</span>}
				</div>
				<p className="text-foreground/85 text-sm leading-relaxed font-medium line-clamp-2">
					{description}
				</p>
			</div>
		</article>
	);
}
