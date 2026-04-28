'use client';

import Image from 'next/image';
import { useEvents, Event } from '@/hooks/use-events';
import React from "react";
import { calculateDurationDays } from "@/lib";

export default function EventsSection ({ locale }: { locale: string }) {
	const {
		visibleEvents,
		nextBatch,
		isLoading,
		isPrefetching,
		loadMore
	} = useEvents();

	const today = new Date().toISOString().split('T')[0];
	const futureEvents = visibleEvents.filter(e => e.date >= today);
	const pastEvents = visibleEvents.filter(e => e.date < today);

	if (isLoading && visibleEvents.length === 0) {
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
			{/* Future Events Grid */}
			<div
				className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
				style={{
					gridTemplateAreas: futureEvents.length > 0 ? Array.from({ length: Math.ceil(futureEvents.length / 4) }).map((_, i) => `
						"a${i} a${i} b${i}"
						"a${i} a${i} b${i}"
						"c${i} d${i} d${i}"
					`).join('\n') : 'none'
				}}
			>
				{futureEvents.map((event, index) => (
					<EventCard key={event.id} event={event} locale={locale} index={index}/>
				))}
			</div>

			{/* Past Events Section */}
			{pastEvents.length > 0 && (
				<div className="space-y-12">
					<div className="flex flex-col items-center py-12 animate-fade-in-up">
						<div className="h-px w-24 bg-gold/30 mb-8"/>
						<h3 className="font-display text-2xl text-gold uppercase tracking-[0.2em]">
							{locale === 'it' ? 'Eventi Passati' : 'Past Events'}
						</h3>
					</div>

					<div
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
						style={{
							gridTemplateAreas: pastEvents.length > 0 ? Array.from({ length: Math.ceil(pastEvents.length / 4) }).map((_, i) => `
								"a${i} a${i} b${i}"
								"a${i} a${i} b${i}"
								"c${i} d${i} d${i}"
							`).join('\n') : 'none'
						}}
					>
						{pastEvents.map((event, index) => (
							<EventCard key={event.id} event={event} locale={locale} index={index}/>
						))}
					</div>
				</div>
			)}

			{(nextBatch !== null || isPrefetching) && (
				<div className="flex justify-center">
					<button
						onClick={loadMore}
						disabled={isPrefetching && !nextBatch}
						className="bg-iron border border-primary/40 text-gold font-display uppercase tracking-[0.2em] text-xs px-8 py-3 rounded-sm hover:bg-primary/10 transition cursor-pointer font-bold shadow-forged disabled:opacity-50"
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

	// Layout logic using grid-template-areas: a, b, c, d per batch of 4
	const batchIndex = Math.floor(index / 4);
	const areaType = ['a', 'b', 'c', 'd'][index % 4];
	const areaName = `${areaType}${batchIndex}`;

	const layoutClasses = index % 4 === 0
		? "lg:h-[600px]"
		: index % 4 === 1
			? "lg:h-[600px]"
			: "lg:h-[450px]";

	return (
		<article
			className={`group relative flex flex-col overflow-hidden rounded-sm border border-border/70 bg-card shadow-forged transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 lg:[grid-area:var(--area)] animate-fade-in-up ${layoutClasses}`}
			style={{ '--area': areaName, backfaceVisibility: 'hidden', transform: 'translateZ(0)' } as React.CSSProperties}
		>
			<div className={`relative overflow-hidden min-h-50 grow bg-card`}>
				<Image
					src={event.image}
					alt={title}
					fill
					className="object-cover transition-transform duration-700 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-card via-card/20 to-transparent pointer-events-none"/>
				<div
					className="absolute top-4 left-4 bg-iron border border-primary/50 rounded-sm px-3 py-2 text-center shadow-forged min-w-[64px] z-10">
					<div className="font-display text-2xl text-gold leading-none font-bold">{day}</div>
					<div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-semibold">
						{monthShort} {year}
					</div>
					{durationDays > 1 && (
						<div
							className="text-[9px] uppercase tracking-tighter text-gold/80 mt-1.5 pt-1.5 border-t border-primary/20 font-bold">
							{durationDays} {locale === 'it' ? 'Giorni' : 'Days'}
						</div>
					)}
				</div>
				<span
					className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm z-10 font-bold">
					{category}
				</span>
			</div>
			<div className="p-4 space-y-2 bg-card relative z-1">
				<h3 className="font-display text-xl text-gold tracking-wide font-bold">{title}</h3>
				<div
					className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
					<span>⌖ {event.location}</span>
					{time && <span>⏱ {time}</span>}
				</div>
				<div className="">
					<p className="text-foreground/85 text-sm leading-relaxed font-medium line-clamp-2 h-[2.8em]">
						{description}
					</p>
				</div>
			</div>
		</article>
	);
}
