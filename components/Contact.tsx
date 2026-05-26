'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import { IoLogoFacebook, IoLogoInstagram, IoMail, IoLogoWhatsapp } from 'react-icons/io5';

export default function Contact () {
	const t = useTranslations('Contact');

	return (
		<section id="contacts"
		         className="py-24 bg-card/10 border-t border-gold/20 px-6 relative overflow-hidden shadow-inner">
			<div className="max-w-4xl mx-auto text-center relative z-10">
				<div className="flex items-center justify-center gap-6 mb-12">
					<div className="h-px grow bg-gold/20"/>
					<div className="w-4 h-4 border border-gold rotate-45 flex items-center justify-center">
						<div className="w-2 h-2 bg-gold rotate-45"></div>
					</div>
					<div className="h-px grow bg-gold/20"/>
				</div>

				<h2 className="text-4xl md:text-6xl font-display text-foreground font-bold tracking-wide mb-12">
					{t('title')}
				</h2>


				<address
					className="flex flex-col gap-8 max-w-4xl mx-auto mb-16 font-body text-xl items-center text-center not-italic">
					<div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-center items-center w-full">
						<div className="flex flex-col items-center min-w-50">
							<span className="text-gold font-display text-sm uppercase tracking-widest">{t('president')}</span>
							<span className="text-foreground font-bold">Marco Signorini</span>
							<a
								href="https://wa.me/393288128980"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all duration-300 text-lg underline underline-offset-4"
							>
								<IoLogoWhatsapp className="text-xl"/>
								+39 328 8128980
							</a>
						</div>

						<div className="flex flex-col items-center min-w-50">
							<span
								className="text-gold font-display text-sm uppercase tracking-widest">{t('vice_president')}</span>
							<span className="text-foreground font-bold">Michela Ballarini</span>
							<a
								href="https://wa.me/393665333688"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all duration-300 text-lg underline underline-offset-4"
							>
								<IoLogoWhatsapp className="text-xl"/>
								+39 366 5333688
							</a>
						</div>
					</div>

					<div className="flex flex-col items-center gap-8 w-full">
						<div className="flex flex-col items-center">
							<span className="text-gold font-display text-sm uppercase tracking-widest">{t('email')}</span>
							<a
								href="mailto:info@flosferri.it"
								className="flex items-center gap-2 text-muted-foreground hover:text-white transition-all duration-300 text-lg underline underline-offset-4"
							>
								<IoMail className="text-xl"/>
								info@flosferri.it
							</a>
						</div>

						<div className="flex flex-col items-center gap-4">
							<span className="text-gold font-display text-sm uppercase tracking-widest">{t('social')}</span>
							<div className="flex gap-8">
								<a
									href="https://www.facebook.com/flosferri.it"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground/60 hover:text-white transition-all duration-300 p-2 border border-gold/20 rounded-full hover:border-gold/50"
									aria-label="Facebook"
								>
									<IoLogoFacebook size={28}/>
								</a>
								<a
									href="https://www.instagram.com/flos_ferri/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-foreground/60 hover:text-white transition-all duration-300 p-2 border border-gold/20 rounded-full hover:border-gold/50"
									aria-label="Instagram"
								>
									<IoLogoInstagram size={28}/>
								</a>
							</div>
						</div>
					</div>
				</address>
			</div>
		</section>
	);
}
