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
						<button
							onClick={(e) => scrollToSection(e, 'top')}
							className="font-display text-2xl tracking-[0.5em] text-gold bg-transparent border-none cursor-pointer p-0"
						>
							FLOS FERRI
						</button>
					</div>

					<div
						className="flex flex-col md:flex-row flex-wrap justify-center gap-12 w-fit max-w-7xl text-base font-body text-muted-foreground/80 border-t border-gold/5 pt-10 mx-auto">
						<div className="flex flex-col gap-2">
							<p className="font-bold text-foreground/80 uppercase tracking-wider">{t('denomination')}</p>
							<p>{t('legal_seat')}</p>
							<p>{t('tax_info')}</p>
							<p>{t('runts')}</p>
							<p>{t('pec')}</p>
						</div>
						<div className="flex flex-col gap-2">
							<p className="font-bold text-foreground/80 uppercase tracking-wider">{t('legal_header')}</p>
							<button
								onClick={() => setIsStatuteOpen(true)}
								className="text-left underline underline-offset-4 hover:text-gold transition-colors bg-transparent border-none cursor-pointer p-0 text-base"
							>
								{t('statute')}
							</button>
							<button
								onClick={() => setIsPrivacyOpen(true)}
								className="text-left underline underline-offset-4 hover:text-gold transition-colors bg-transparent border-none cursor-pointer p-0 text-base"
							>
								{t('privacy_policy')}
							</button>
						</div>
					</div>

					<div className="flex flex-col items-center gap-4">
						<div className="ornament-divider w-24 opacity-30"></div>
						<div className="text-base font-body italic text-muted-foreground/60">
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
