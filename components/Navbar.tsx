'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import Image from "next/image";
import { scrollToSection } from "@/lib";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export default function Navbar () {
	const locale = useLocale();
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useScrollToTop();

	const navItems = [
		{ name: 'Home', id: 'top' },
		{ name: 'Eventi', id: 'events' },
		{ name: 'Contatti', id: 'contacts' },
	];

	const handleScrollToSection = (e: React.MouseEvent, id: string) => {
		scrollToSection(e, id);
		setIsOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/95 backdrop-blur-md border-b border-gold/20 py-3 shadow-forged">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex justify-between items-center">
					<button
						onClick={(e) => handleScrollToSection(e, 'top')}
						className="group flex items-center gap-3 cursor-pointer bg-transparent border-none p-0"
					>
						<Image
							src="/flosferrilogo.webp"
							alt="Flos Ferri Logo"
							width={40}
							height={40}
							style={{ width: "auto", height: "auto" }}
						/>
						<div className="flex flex-col text-left">
							<span
								className="font-display text-xl tracking-[0.2em] text-foreground group-hover:text-gold transition-colors font-bold">
								FLOS<span className="text-gold">FERRI</span>
							</span>
						</div>
					</button>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center gap-8">
						<div className="flex items-center gap-6 pr-8 border-r border-gold/20">
							{navItems.map((item) => (
								<button
									key={item.name}
									onClick={(e) => handleScrollToSection(e, item.id)}
									className="font-display text-xs uppercase tracking-[0.2em] text-foreground hover:text-gold transition-colors relative group bg-transparent border-none cursor-pointer p-0 font-bold"
								>
									{item.name}
									<span
										className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full"/>
								</button>
							))}
						</div>

						{/* Language switcher */}
						<div className="flex items-center gap-4">
							<Link
								href={pathname}
								locale="en"
								className={`font-display text-[10px] tracking-widest font-bold ${locale === 'en' ? 'text-gold' : 'text-foreground/90 hover:text-foreground'}`}
							>
								EN
							</Link>
							<div className="w-1 h-1 rounded-full bg-gold/30"/>
							<Link
								href={pathname}
								locale="it"
								className={`font-display text-[10px] tracking-widest font-bold ${locale === 'it' ? 'text-gold' : 'text-foreground/90 hover:text-foreground'}`}
							>
								IT
							</Link>
						</div>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gold p-2 focus:outline-none"
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

			{/* Mobile menu */}
			{isOpen && (
				<div
					className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-gold/20 animate-in slide-in-from-top duration-300">
					<div className="p-6 flex flex-col gap-6 items-center text-center">
						{navItems.map((item) => (
							<button
								key={item.name}
								onClick={(e) => handleScrollToSection(e, item.id)}
								className="font-display text-sm uppercase tracking-[0.2em] text-foreground hover:text-gold bg-transparent border-none cursor-pointer font-bold"
							>
								{item.name}
							</button>
						))}
						<div className="h-px w-12 bg-gold/20"/>
						<div className="flex gap-6">
							<Link
								href={pathname}
								locale="en"
								onClick={() => setIsOpen(false)}
								className={`font-display text-xs font-bold ${locale === 'en' ? 'text-gold underline underline-offset-4' : 'text-foreground/90'}`}
							>
								ENGLISH
							</Link>
							<Link
								href={pathname}
								locale="it"
								onClick={() => setIsOpen(false)}
								className={`font-display text-xs font-bold ${locale === 'it' ? 'text-gold underline underline-offset-4' : 'text-foreground/90'}`}
							>
								ITALIANO
							</Link>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
