import { useTranslations } from 'next-intl';

export default function About () {
	const t = useTranslations('About');

	return (
		<section id="about" className="py-24 px-6 relative overflow-hidden">
			<div className="max-w-5xl mx-auto text-center">
				<header className="mb-10">
					<div className="ornament-divider w-full max-w-xs mx-auto mb-8">
						<span className="font-script text-gold uppercase tracking-[0.3em] text-sm">{t('subtitle')}</span>
					</div>
					<h2 className="font-display text-4xl md:text-6xl mt-8 text-foreground font-bold tracking-wide">
						{t('title')}
					</h2>
				</header>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-start">
					<div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-body font-medium">
						<p>
							{t('p1')}
						</p>
						<p>
							{t.rich('p2', {
								wiki: (chunks) => (
									<a
										href="https://it.wikipedia.org/wiki/Fiore_dei_Liberi"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-white/50"
									>
										{chunks}
									</a>
								)
							})}
						</p>
						<p>{t('p3')}</p>
					</div>
					<div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-body font-medium">
						<p>{t('p4')}</p>
						<p>{t('p5')}</p>
						<div className="italic text-foreground/70 mt-8 border-l border-gold/20 pl-6">
							{t.rich('p6', {
								maps: (chunks) => (
									<a
										href="https://maps.app.goo.gl/q94ayCoFp3zHkGzGA"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-white/50"
									>
										{chunks}
									</a>
								),
								maps_rocca: (chunks) => (
									<a
										href="https://maps.app.goo.gl/1ysrEQ2pYKSe438L9"
										target="_blank"
										rel="noopener noreferrer"
										className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-white/50"
									>
										{chunks}
									</a>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
