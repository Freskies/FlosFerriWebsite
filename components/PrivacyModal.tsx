'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import { useModal } from "@/hooks/use-modal";

interface PrivacyModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
	const t = useTranslations('Footer');
	const { dialogRef, handleBackdropClick } = useModal(isOpen, onClose);

	if (!isOpen) return null;

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			onClick={handleBackdropClick}
			className="fixed inset-0 z-100 w-full h-full max-w-none max-h-none bg-background/80 backdrop-blur-sm p-4 md:p-6 border-none backdrop:bg-transparent flex items-center justify-center open:animate-in open:fade-in duration-300">
			<article
				className="relative w-full max-w-4xl bg-card border border-gold/20 p-6 md:p-10 shadow-forged animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
				onClick={(e) => e.stopPropagation()}
				aria-labelledby="privacy-title"
			>
				<button
					onClick={onClose}
					aria-label={t('privacy_modal_close')}
					className="absolute top-4 right-4 text-gold hover:text-foreground transition-colors bg-transparent border-none cursor-pointer p-2 z-10"
				>
					<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				<header className="text-center mb-10 pr-6">
					<h2 id="privacy-title" className="font-display text-2xl md:text-3xl text-gold uppercase tracking-widest mb-2">
						{t('privacy_modal_title')}
					</h2>
					<div className="w-full h-px bg-gold/10 mt-6"></div>
				</header>

				<div
					className="flex-1 overflow-y-auto pr-4 custom-scrollbar font-body text-foreground/90 leading-relaxed">
					<div className="space-y-8">
						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('privacy_modal_intro_title')}
							</h3>
							<p>{t('privacy_modal_intro')}</p>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('privacy_modal_section_contacts_title')}
							</h3>
							
							<div className="space-y-6">
								<p>{t('privacy_modal_section_contacts_intro')}</p>
								
								<div className="space-y-4">
									<article>
										<h4 className="font-bold text-foreground mb-2">{t('privacy_modal_email_title')}</h4>
										<p>{t('privacy_modal_email_content')}</p>
									</article>
									<article>
										<h4 className="font-bold text-foreground mb-2">{t('privacy_modal_whatsapp_title')}</h4>
										<p>{t('privacy_modal_whatsapp_content')}</p>
									</article>
								</div>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">
								{t('privacy_modal_holder_title')}
							</h3>
							<p>
								{t.rich('privacy_modal_holder_content', {
									email: (chunks) => (
										<a
											href="mailto:info@flosferri.it"
											className="text-muted-foreground hover:text-white transition-all duration-300 underline underline-offset-4 cursor-pointer hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
										>
											{chunks}
										</a>
									)
								})}
							</p>
						</section>
					</div>
				</div>

				<footer className="mt-8 pt-6 border-t border-gold/10 text-center shrink-0">
					<button
						onClick={onClose}
						className="border border-gold/40 text-gold font-display uppercase tracking-widest text-xs px-10 py-4 hover:bg-gold/10 transition-colors cursor-pointer font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
					>
						{t('privacy_modal_close')}
					</button>
				</footer>
			</article>
		</dialog>
	);
}
