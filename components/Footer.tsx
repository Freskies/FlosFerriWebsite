'use client';

import React, { useState } from "react";
import { scrollToSection } from "@/lib";
import { useTranslations } from 'next-intl';
import PrivacyModal from "@/components/PrivacyModal";
import StatuteModal from "@/components/StatuteModal";

export default function Footer () {
	const year = new Date().getFullYear();
	const t = useTranslations('Footer');
	const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
	const [isStatuteOpen, setIsStatuteOpen] = useState(false);

	return (
		<footer className="bg-background border-t border-gold/10 py-16 relative overflow-hidden">
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gold/20"/>

			<div className="max-w-7xl mx-auto px-6">
				<div className="flex flex-col items-center gap-10">
					<div className="flex flex-col items-center gap-2">
						<a
							href="#top"
							onClick={(e) => scrollToSection(e, 'top')}
							className="font-display text-2xl tracking-[0.5em] text-gold bg-transparent border-none cursor-pointer p-0"
						>
							FLOS FERRI
						</a>
					</div>

					<div
						className="flex flex-col md:flex-row flex-wrap justify-center gap-12 w-fit max-w-7xl text-base font-body text-foreground/80 border-t border-gold/5 pt-10 mx-auto relative z-10">
						<address className="flex flex-col gap-2 not-italic">
							<p className="font-bold text-foreground/90 uppercase tracking-wider">{t('denomination')}</p>
							<p className="text-foreground/70">{t('legal_seat')}</p>
							<p className="text-foreground/70">{t('tax_info')}</p>
							<p className="text-foreground/70">{t('runts')}</p>
							<p className="text-foreground/70">{t('pec')}</p>
						</address>
						<nav className="flex flex-col gap-2" aria-label="Informazioni legali">
							<p className="font-bold text-foreground/90 uppercase tracking-wider">{t('legal_header')}</p>
							<button
								type="button"
								onClick={() => setIsStatuteOpen(true)}
								className="text-left underline underline-offset-4 hover:text-white hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all cursor-pointer p-0 text-base bg-transparent border-none font-body text-foreground/70"
							>
								{t('statute')}
							</button>
							<button
								type="button"
								onClick={() => setIsPrivacyOpen(true)}
								className="text-left underline underline-offset-4 hover:text-white hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all cursor-pointer p-0 text-base bg-transparent border-none font-body text-foreground/70"
							>
								{t('privacy_policy')}
							</button>
						</nav>
					</div>

					<div
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-gold/5 blur-[100px] rounded-full pointer-events-none -z-10"/>

					<div className="flex flex-col items-center gap-4">
						<div className="ornament-divider w-24 opacity-30"></div>
						<div className="text-base font-body italic text-foreground/60">
							{t('rights', { year })}
						</div>
					</div>
				</div>
			</div>

			<PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)}/>
			<StatuteModal isOpen={isStatuteOpen} onClose={() => setIsStatuteOpen(false)}/>
		</footer>
	);
}
