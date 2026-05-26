'use client';

import EventsSection from './EventsSection';
import { useTranslations, useLocale } from 'next-intl';

export default function Events () {
	const t = useTranslations('Events');
	const locale = useLocale();
	return (
		<section id="events" className="mx-auto max-w-7xl px-6 py-24">
			<header className="flex flex-col items-center text-center mb-16">
				<div className="ornament-divider w-full max-w-sm mb-8">
					<span className="font-script text-gold uppercase tracking-[0.3em] text-sm">{t('title')}</span>
				</div>
				<h2 className="font-display text-4xl md:text-6xl text-foreground font-bold tracking-wide">
					{t('subtitle')}
				</h2>
			</header>

			<EventsSection />
		</section>
	);
}
