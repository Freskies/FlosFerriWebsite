'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import Image from "next/image";
import { scrollToSection } from "@/lib";
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';

const LOGO_SIZE = 40;

export default function Navbar () {
	useScrollToTop();
	const t = useTranslations('Navigation');
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: t('home'), id: 'top' },
		{ name: t('events'), id: 'events' },
		{ name: t('contacts'), id: 'contacts' },
	];

	const handleScrollToSection = (e: React.MouseEvent, id: string) => {
		scrollToSection(e, id);
		setIsOpen(false);
	};

	return (
		<header
			className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-forged">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center">
					<a
						href="#top"
						onClick={(e) => handleScrollToSection(e, 'top')}
						className="group flex items-center gap-3 cursor-pointer bg-transparent border-none p-0 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded-sm transition-shadow"
						aria-label={t('logo_label')}
					>
						<Image
							src="/flosferrilogo.webp"
							alt="Flos Ferri Logo"
							width={LOGO_SIZE}
							height={LOGO_SIZE}
							style={{ width: "auto", height: "auto" }}
						/>
						<div className="flex flex-col text-left">
							<span
								className="font-display text-xl tracking-[0.2em] text-foreground group-hover:text-gold transition-colors font-bold">
								<span className="text-accent">FLOS</span><span className="text-gold">FERRI</span>
							</span>
						</div>
					</a>

					<div className="hidden md:flex items-center gap-8">
						<nav className="flex items-center gap-6 pr-8 border-r border-gold/20" aria-label="Desktop menu">
							{navItems.map((item) => (
								<a
									key={item.name}
									href={`#${item.id}`}
									onClick={(e) => handleScrollToSection(e, item.id)}
									className="font-display text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors relative group bg-transparent border-none cursor-pointer p-0 font-bold focus-visible:outline-none focus-visible:text-gold"
								>
									{item.name}
									<span
										className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full"/>
								</a>
							))}
						</nav>

						{/* Language switcher */}
						<div className="flex items-center gap-4">
							<div className="relative flex items-center">
								<button
									onClick={() => router.replace(pathname, { locale: 'en', scroll: false })}
									className={`font-display text-[10px] tracking-widest font-bold transition-all duration-300 relative py-2 bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-xs ${locale === 'en' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-foreground/90 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'}`}
								>
									EN
									{locale === 'en' && (
										<motion.div
											layoutId="underline-desktop"
											className="absolute bottom-1 left-0 right-0 h-px bg-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
											transition={{ type: "spring", stiffness: 380, damping: 30 }}
										/>
									)}
								</button>
							</div>
							<div className="w-1 h-1 rounded-full bg-gold/30"/>
							<div className="relative flex items-center">
								<button
									onClick={() => router.replace(pathname, { locale: 'it', scroll: false })}
									className={`font-display text-[10px] tracking-widest font-bold transition-all duration-300 relative py-2 bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold rounded-xs ${locale === 'it' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-foreground/90 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'}`}
								>
									IT
									{locale === 'it' && (
										<motion.div
											layoutId="underline-desktop"
											className="absolute bottom-1 left-0 right-0 h-px bg-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
											transition={{ type: "spring", stiffness: 380, damping: 30 }}
										/>
									)}
								</button>
							</div>
						</div>
					</div>

					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gold p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
							aria-expanded={isOpen}
							aria-label={isOpen ? t('menu_close') : t('menu_open')}
						>
							{isOpen ? (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
									      d="M6 18L18 6M6 6l12 12"/>
								</svg>
							) : (
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16"/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<>
						{/* Overlay to close menu when clicking outside */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="md:hidden fixed inset-0 top-[65px] bg-black/10 backdrop-blur-[2px] z-[-1]"
							onClick={() => setIsOpen(false)}
						/>
						<motion.nav
							initial={{ opacity: 0, y: -20, scaleY: 0.95 }}
							animate={{ opacity: 1, y: 0, scaleY: 1 }}
							exit={{ opacity: 0, y: -20, scaleY: 0.95 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
							className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-gold/20 origin-top"
							aria-label="Mobile menu"
						>
							<div className="p-8 flex flex-col gap-8 items-center text-center">
								<div className="flex flex-col gap-6 w-full">
									{navItems.map((item) => (
										<a
											key={item.name}
											href={`#${item.id}`}
											onClick={(e) => handleScrollToSection(e, item.id)}
											className="font-display text-lg uppercase tracking-[0.25em] text-foreground hover:text-gold bg-transparent border-none cursor-pointer font-bold transition-colors focus-visible:text-gold focus-visible:outline-none"
										>
											{item.name}
										</a>
									))}
								</div>

								<div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent"/>

								<div className="flex gap-8">
									<div className="relative">
										<button
											onClick={() => {
												router.replace(pathname, { locale: 'en', scroll: false });
												setIsOpen(false);
											}}
											className={`font-display text-sm tracking-widest font-bold transition-all duration-300 relative py-2 block bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:text-gold ${locale === 'en' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-foreground/70 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'}`}
										>
											ENGLISH
											{locale === 'en' && (
												<motion.div
													layoutId="underline-mobile"
													className="absolute bottom-1 left-0 right-0 h-px bg-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
													transition={{ type: "spring", stiffness: 380, damping: 30 }}
												/>
											)}
										</button>
									</div>
									<div className="relative">
										<button
											onClick={() => {
												router.replace(pathname, { locale: 'it', scroll: false });
												setIsOpen(false);
											}}
											className={`font-display text-sm tracking-widest font-bold transition-all duration-300 relative py-2 block bg-transparent border-none cursor-pointer focus-visible:outline-none focus-visible:text-gold ${locale === 'it' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-foreground/70 hover:text-gold hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]'}`}
										>
											ITALIANO
											{locale === 'it' && (
												<motion.div
													layoutId="underline-mobile"
													className="absolute bottom-1 left-0 right-0 h-px bg-gold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
													transition={{ type: "spring", stiffness: 380, damping: 30 }}
												/>
											)}
										</button>
									</div>
								</div>
							</div>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</header>
	);
}
