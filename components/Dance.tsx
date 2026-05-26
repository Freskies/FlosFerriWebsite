import { useTranslations } from 'next-intl';

export default function Dance () {
	const t = useTranslations('Dance');

	return (
		<section id="dance" className="py-24 px-6 relative overflow-hidden">
			<div className="max-w-6xl mx-auto">
				<header className="flex flex-col items-center mb-16 text-center">
					<div className="ornament-divider w-full max-w-md mb-8">
						<span className="font-script text-gold uppercase tracking-[0.3em] text-sm">{t('subtitle')}</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-display text-foreground font-bold tracking-wide">
						{t('title')}
					</h2>
				</header>
				
				<div className="columns-1 md:columns-2 gap-16 space-y-8 text-foreground/80 text-lg leading-relaxed font-body font-medium">
					<p>
						{t('p1')}
					</p>
					<p>
						{t('p2')}
					</p>
					<p>{t('p3')}</p>
					<p>{t('p4')}</p>
					<p>{t('p5')}</p>
					<p>
						{t('p6')}
					</p>
				</div>
			</div>
		</section>
	);
}
