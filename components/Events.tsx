import eventsData from '@/data/events.json';
import Image from 'next/image';

interface Event {
	id: string;
	title: Record<string, string>;
	description: Record<string, string>;
	date: string;
	endDate?: string;
	time: Record<string, string> | string;
	location: string;
	category: Record<string, string>;
	image: string;
	highlight?: boolean;
}

export default function Events ({ locale }: { locale: string }) {
	const events = (eventsData as Event[]);

	return (
		<section id="events" className="mx-auto max-w-7xl px-6 py-24">
			<div className="flex flex-col items-center text-center mb-16">
				<div className="ornament-divider w-full max-w-sm mb-8">
					<span className="font-script text-gold uppercase tracking-widest text-sm">Calendario d'Arme</span>
				</div>
				<h2 className="font-display text-4xl md:text-5xl mt-4">
					Calendario d'Arme
				</h2>
			</div>
			
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{events.map((event) => (
					<EventCard key={event.id} event={event} locale={locale} />
				))}
			</div>
		</section>
	);
}

function EventCard({ event, locale }: { event: Event, locale: string }) {
	const dateObj = new Date(event.date + "T00:00:00");
	const day = dateObj.getDate();
	const monthShort = dateObj.toLocaleDateString(locale, { month: 'short' }).toUpperCase();
	const year = dateObj.getFullYear();
	
	const title = event.title[locale] || event.title['en'];
	const description = event.description[locale] || event.description['en'];
	const category = event.category[locale] || event.category['en'];
	const time = typeof event.time === 'string' ? event.time : (event.time[locale] || event.time['en']);

	return (
		<article
			className={`group relative overflow-hidden rounded-sm border border-border/70 bg-card shadow-forged transition-all hover:border-primary/60 hover:-translate-y-1 ${
				event.highlight ? "md:col-span-2" : ""
			}`}
		>
			<div className="relative aspect-[16/10] overflow-hidden">
				<Image
					src={event.image}
					alt={title}
					fill
					className="object-cover transition-transform duration-700 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
				<div className="absolute top-4 left-4 bg-iron border border-primary/50 rounded-sm px-3 py-2 text-center shadow-forged min-w-[64px] z-10">
					<div className="font-display text-2xl text-gold leading-none font-bold">{day}</div>
					<div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1 font-semibold">
						{monthShort} {year}
					</div>
				</div>
				<span className="absolute top-4 right-4 bg-accent/90 text-accent-foreground text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-sm z-10 font-bold">
					{category}
				</span>
			</div>
			<div className="p-6 space-y-3">
				<h3 className="font-display text-2xl text-gold tracking-wide font-bold">{title}</h3>
				<div className="flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
					<span>⌖ {event.location}</span>
					<span>⏱ {time}</span>
				</div>
				<p className="text-foreground/85 leading-relaxed font-medium">{description}</p>
			</div>
		</article>
	);
}
