import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cinzel, EB_Garamond, MedievalSharp } from "next/font/google";
import "../globals.css";
import React from "react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const cinzel = Cinzel({
	variable: "--font-cinzel",
	subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
});

const medievalSharp = MedievalSharp({
	variable: "--font-medieval-sharp",
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Flos Ferri",
		default: "Flos Ferri | Associazione di Scherma Medievale",
	},
	description: "Associazione di scherma medievale e storica. Corsi di spada lunga, brocchiero e arti marziali storiche europee (HEMA).",
	keywords: ["scherma medievale", "HEMA", "scherma storica", "spada lunga", "brocchiero", "arti marziali storiche", "Flos Ferri"],
	authors: [{ name: "Flos Ferri" }],
	creator: "Flos Ferri",
	publisher: "Flos Ferri",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: "Flos Ferri | Associazione di Scherma Medievale",
		description: "Scopri l'arte della scherma medievale con Flos Ferri. Corsi, eventi e rievocazione storica.",
		url: "https://www.flosferri.it", // Esempio segnaposto
		siteName: "Flos Ferri",
		images: [
			{
				url: "/og-image.jpg", // Segnaposto
				width: 1200,
				height: 630,
				alt: "Flos Ferri - Scherma Medievale",
			},
		],
		locale: "it_IT",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Flos Ferri | Associazione di Scherma Medievale",
		description: "Corsi di scherma storica e rievocazione medievale.",
		images: ["/og-image.jpg"], // Segnaposto
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	appleWebApp: {
		title: "FlosFerri",
	},
	manifest: "/manifest.json",
	icons: {
		icon: [
			{ url: "/icon1.png", sizes: "32x32", type: "image/png" },
			{ url: "/icon0.svg", type: "image/svg+xml" },
		],
		apple: "/apple-icon.png",
	},
};

export default async function RootLayout ({ children, params }: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as (typeof routing.locales)[number])) notFound();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cinzel.variable} ${ebGaramond.variable} ${medievalSharp.variable} h-full antialiased`}
			suppressHydrationWarning
			data-scroll-behavior="smooth"
		>
		<body className="min-h-full flex flex-col" suppressHydrationWarning>
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
		</body>
		</html>
	);
}
