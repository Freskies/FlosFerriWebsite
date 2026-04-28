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
			className="fixed inset-0 z-100 w-full h-full max-w-none max-h-none bg-background/80 backdrop-blur-sm p-6 border-none backdrop:bg-transparent flex items-center justify-center open:animate-in open:fade-in duration-300">
			<article
				className="relative w-full max-w-2xl bg-card border border-gold/20 p-8 shadow-forged animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
				onClick={(e) => e.stopPropagation()}
				aria-labelledby="privacy-title"
			>
				<button
					onClick={onClose}
					aria-label="Chiudi Privacy Policy"
					className="absolute top-4 right-4 text-gold hover:text-foreground transition-colors bg-transparent border-none cursor-pointer p-2 z-10"
				>
					<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				<header className="mb-6">
					<h2 id="privacy-title" className="font-display text-2xl text-gold uppercase tracking-wider mb-6">
						{t('privacy_modal_title')}
					</h2>
					<div className="w-full h-px bg-gold/10"></div>
				</header>

				<div
					className="font-body text-base text-foreground/80 leading-relaxed space-y-4 overflow-y-auto flex-1 pr-4 custom-scrollbar">
					<p>{t('privacy_modal_content')}</p>
				</div>

				<footer className="mt-8 pt-6 border-t border-gold/10 text-center flex-shrink-0">
					<button
						onClick={onClose}
						className="border border-gold/40 text-gold font-display uppercase tracking-widest text-xs px-8 py-3 hover:bg-gold/10 transition-colors cursor-pointer font-bold"
					>
						Chiudi
					</button>
				</footer>
			</article>
		</dialog>
	);
}
