import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Fencing () {
	const t = useTranslations('Fencing');

	return (
		<section id="fencing" className="py-24 px-6 relative bg-card/30 border-y border-gold/10">
			<div className="max-w-6xl mx-auto">
				<header className="flex flex-col items-center mb-16 text-center">
					<div className="ornament-divider w-full max-w-xs mb-8">
						<span className="font-script text-gold uppercase tracking-[0.3em] text-sm">{t('subtitle')}</span>
					</div>
					<h2 className="text-4xl md:text-6xl font-display text-foreground font-bold tracking-wide">
						{t('title')}
					</h2>
				</header>

				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div
						className="relative group overflow-hidden rounded-sm border border-gold/20 shadow-forged aspect-square">
						<Image
							src="/compagnia_spade.webp"
							alt="Historical Fencing"
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div
							className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60"/>
					</div>

					<div className="space-y-8">
						<div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-body font-medium">
							<p className="text-xl italic font-semibold">
								{t('intro')}
							</p>
							<p>
								{t.rich('activity', {
									wiki: (chunks) => (
										<a
											href="https://it.wikipedia.org/wiki/Fiore_dei_Liberi"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gold hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-gold/30 hover:decoration-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xs"
										>
											{chunks}
										</a>
									)
								})}
							</p>
							<p>{t('research')}</p>
						</div>
					</div>
				</div>

				<div className="mt-20">
					<div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-body font-medium italic">
						<p>{t('vision')}</p>
						<p>{t('public')}</p>
						<p>{t('details.p1')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}
