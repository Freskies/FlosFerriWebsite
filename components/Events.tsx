'use client';

import EventsSection from './EventsSection';

export default function Events ({ locale }: { locale: string }) {
	return (
		<section id="events" className="mx-auto max-w-7xl px-6 py-24">
			<div className="flex flex-col items-center text-center mb-16">
				<div className="ornament-divider w-full max-w-sm mb-8">
					<span className="font-script text-gold uppercase tracking-widest text-sm">Calendario d'Arme</span>
				</div>
				<h2 className="font-display text-4xl md:text-5xl mt-4">
					Eventi
				</h2>
			</div>

			<EventsSection locale={locale}/>
		</section>
	);
}
