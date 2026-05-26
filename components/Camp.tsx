import { useTranslations } from 'next-intl';

export default function Camp () {
	const t = useTranslations('Camp');

	return (
		<section id="camp" className="py-24 px-6 relative bg-background border-y border-gold/10">
			<div className="max-w-4xl mx-auto text-center">
				<header className="flex flex-col items-center mb-16 text-center">
					<div className="ornament-divider w-full max-w-xs mb-8">
						<span className="font-script text-gold uppercase tracking-[0.3em] text-sm">{t('subtitle')}</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-display text-foreground font-bold tracking-wide">
						{t('title')}
					</h2>
				</header>

				<div className="relative py-10 md:py-16">
					<p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic font-body font-medium">
						{t('p1')}
					</p>
				</div>
			</div>
		</section>
	);
}
