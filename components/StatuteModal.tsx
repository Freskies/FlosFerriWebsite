'use client';

import React from "react";
import { useModal } from "@/hooks/use-modal";
import { useTranslations } from 'next-intl';

interface StatuteModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function StatuteModal ({ isOpen, onClose }: StatuteModalProps) {
	const t = useTranslations('Footer.statute_modal');
	const { dialogRef, handleBackdropClick } = useModal(isOpen, onClose);

	if (!isOpen) return null;

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			onClick={handleBackdropClick}
			className="fixed inset-0 z-100 w-full h-full max-w-none max-h-none bg-background/80 backdrop-blur-sm p-4 md:p-6 border-none backdrop:bg-transparent flex items-center justify-center open:animate-in open:fade-in duration-300"
		>
			<article
				className="relative w-full max-w-4xl bg-card border border-gold/20 p-6 md:p-10 shadow-forged animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
				onClick={(e) => e.stopPropagation()}
				aria-labelledby="statute-title"
			>
				<button
					onClick={onClose}
					aria-label={t('close')}
					className="absolute top-4 right-4 text-gold hover:text-foreground transition-colors bg-transparent border-none cursor-pointer p-2 z-10"
				>
					<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				<header className="text-center mb-10 pr-6">
					<h2 id="statute-title"
					    className="font-display text-2xl md:text-3xl text-gold uppercase tracking-widest mb-2">
						{t('title')}
					</h2>
					<div className="w-full h-px bg-gold/10 mt-6"></div>
				</header>

				<div className="flex-1 overflow-y-auto pr-4 custom-scrollbar font-body text-foreground/90 leading-relaxed">
					<div className="space-y-8">
						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title1')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art1_title')}</h4>
									<p>
										{t('sections.art1_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art2_title')}</h4>
									<p className="mb-4">
										{t('sections.art2_intro')}
									</p>
									<ul className="list-disc pl-5 space-y-2">
										{(t.raw('sections.art2_list') as string[]).map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
									<p className="mt-4">
										{t('sections.art2_footer')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art3_title')}</h4>
									<p>
										{t('sections.art3_content')}
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title2')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art4_title')}</h4>
									<p className="mb-2">{t('sections.art4_intro')}</p>
									<ol className="list-decimal pl-5 space-y-1">
										{(t.raw('sections.art4_list') as string[]).map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ol>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art5_title')}</h4>
									<p className="mb-4">{t('sections.art5_intro')}</p>
									<ul className="space-y-3">
										{(t.raw('sections.art5_list') as string[]).map((item, i) => {
											const letters = ['d)', 'f)', 'i)', 'k)', 't)', 'z)'];
											return (
												<li key={i}>
													<span className="font-bold text-gold mr-2">{letters[i]}</span>
													{item}
												</li>
											);
										})}
									</ul>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art6_title')}</h4>
									<p className="mb-4">{t('sections.art6_intro')}</p>
									<ul className="list-none space-y-3">
										{(t.raw('sections.art6_list') as string[]).map((item, i) => {
											const letters = ['a)', 'b)', 'c)'];
											return (
												<li key={i}>
													<span className="font-bold text-gold mr-2">{letters[i]}</span>
													{item}
												</li>
											);
										})}
									</ul>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art7_title')}</h4>
									<p>
										{t('sections.art7_content')}
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title3')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art8_title')}</h4>
									<p>
										{t('sections.art8_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art9_title')}</h4>
									<p>
										{t('sections.art9_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art10_title')}</h4>
									<p className="mb-4">{t('sections.art10_content')}</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art11_title')}</h4>
									<p>
										{t('sections.art11_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art12_title')}</h4>
									<p>
										{t('sections.art12_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art13_title')}</h4>
									<p>
										{t('sections.art13_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art14_title')}</h4>
									<p>
										{t('sections.art14_content')}
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title4')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art15_title')}</h4>
									<p>
										{t('sections.art15_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art16_title')}</h4>
									<p>
										{t('sections.art16_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art17_title')}</h4>
									<p>
										{t('sections.art17_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art18_title')}</h4>
									<p>
										{t('sections.art18_content')}
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title5')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art19_title')}</h4>
									<p>{t('sections.art19_content')}</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art20_title')}</h4>
									<p>
										{t('sections.art20_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art21_title')}</h4>
									<p>
										{t('sections.art21_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art22_title')}</h4>
									<p>
										{t('sections.art22_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art23_title')}</h4>
									<p>
										{t('sections.art23_content')}
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('sections.title6')}
							</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art26_title')}</h4>
									<p>
										{t('sections.art26_content')}
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">{t('sections.art28_title')}</h4>
									<p>
										{t('sections.art28_content')}
									</p>
								</article>
							</div>
						</section>
					</div>

					<aside className="mt-12 text-center text-foreground/60 italic text-sm">
						<p>{t('disclaimer')}</p>
					</aside>
				</div>

				<footer className="mt-8 pt-6 border-t border-gold/10 text-center shrink-0">
					<button
						onClick={onClose}
						className="border border-gold/40 text-gold font-display uppercase tracking-widest text-xs px-10 py-4 hover:bg-gold/10 transition-colors cursor-pointer font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						{t('close')}
					</button>
				</footer>
			</article>
		</dialog>
	);
}
