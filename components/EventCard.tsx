'use client';

import Image from 'next/image';
import { Event } from '@/hooks/use-events';
import React from "react";
import { calculateDurationDays } from "@/lib";
import { useTranslations } from 'next-intl';

interface EventCardProps {
	event: Event;
	locale: string;
	index: number;
}

export function EventCard ({ event, locale, index }: EventCardProps) {
	const t = useTranslations('Events');
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
	// /path remains, name -> /name (works even if it's in a nested path)
	const imagePath = event.image.startsWith('/') ? event.image : `/covers/${event.image}`;

	const position = index % 4;

	return (
		<article
			aria-labelledby={`event-title-${event.id}`}
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
					src={imagePath}
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
							{durationDays} {t('days')}
						</div>
					)}
				</div>
				<span
					className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-sm z-10 font-bold">
					{category}
				</span>
			</div>
			<div className="p-5 space-y-3 bg-card relative z-2">
				<h3 id={`event-title-${event.id}`} className="font-display text-xl text-gold tracking-wide font-bold line-clamp-1">{title}</h3>
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
