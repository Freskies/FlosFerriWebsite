import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Cinzel, EB_Garamond, MedievalSharp } from "next/font/google";
import "../globals.css";

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
	title: "Flos Ferri",
	description: "Medieval Fencing Association",
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

export default async function RootLayout ({
	                                          children,
	                                          params
                                          }: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) notFound();

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html
			lang={locale}
			className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${cinzel.variable} ${ebGaramond.variable} ${medievalSharp.variable} h-full antialiased`}
			suppressHydrationWarning
		>
		<body className="min-h-full flex flex-col">
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
		</body>
		</html>
	);
}
