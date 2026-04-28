'use client';

import Image from 'next/image';
import React from "react";
import { scrollToSection } from "@/lib";

export default function Hero () {

	return (
		<section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
			<Image
				src="/flosfferrihero.png"
				alt="Medieval Knights"
				fill
				className="object-cover brightness-50"
				priority
			/>
			<div className="absolute inset-0 z-[5]" style={{ background: "var(--gradient-hero)" }}/>

			<div className="relative z-10 text-center px-6 max-w-4xl">
				<h1 className="font-display text-6xl md:text-8xl text-foreground mb-6 font-black">
					Flos<span className="text-gold">Ferri</span>
				</h1>
				<p className="font-body text-xl md:text-2xl text-foreground italic max-w-2xl mx-auto leading-relaxed font-medium">
					«Rievocazioni, Danza, altre parole»
					<br/>
				</p>
				<div className="mt-10 flex flex-wrap gap-4 justify-center">
					<button
						onClick={(e) => scrollToSection(e, 'events')}
						className="bg-gold-gradient text-primary-foreground font-display uppercase tracking-[0.2em] text-sm px-8 py-4 rounded-sm shadow-glow-gold hover:opacity-90 transition cursor-pointer border-none font-bold"
					>
						I prossimi eventi
					</button>
					<button
						onClick={(e) => scrollToSection(e, 'about')}
						className="border border-primary/60 text-foreground font-display uppercase tracking-[0.2em] text-sm px-8 py-4 rounded-sm hover:bg-primary/10 transition cursor-pointer font-bold"
					>
						La nostra storia
					</button>
				</div>
			</div>
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 text-2xl animate-bounce">
				⌄
			</div>
		</section>
	);
}
