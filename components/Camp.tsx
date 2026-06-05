import { useTranslations } from 'next-intl';
import Carousel from './Carousel';

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

				<div className="relative">
					<p className="text-xl md:text-2xl leading-relaxed text-foreground/90 italic font-body font-medium mb-12">
						{t('p1')}
					</p>
					<Carousel />
				</div>
			</div>
		</section>
	);
}
