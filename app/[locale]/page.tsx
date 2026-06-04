import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Events from '@/components/Events';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fencing from '@/components/Fencing';
import Camp from '@/components/Camp';
import Dance from '@/components/Dance';
import Contact from '@/components/Contact';

export default function Home () {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "SportsClub",
		"name": "Flos Ferri - Associazione Scherma Medievale",
		"description": "Associazione sportiva dilettantistica dedicata allo studio e alla pratica della scherma storica e medievale (HEMA).",
		"sport": "Scherma Storica (HEMA)",
		"url": "https://www.flosferri.it",
		"logo": "https://www.flosferri.it/icon1.png",
		"image": "https://www.flosferri.it/og-image.jpg",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Via Esempio 123",
			"addressLocality": "Città",
			"postalCode": "00000",
			"addressRegion": "Provincia",
			"addressCountry": "IT"
		},
		"contactPoint": [
			{
				"@type": "ContactPoint",
				"telephone": "+39 328 8128980",
				"contactType": "Presidente",
				"email": "info@flosferri.it",
				"availableLanguage": ["Italian", "English"]
			},
			{
				"@type": "ContactPoint",
				"telephone": "+39 366 5333688",
				"contactType": "Vice Presidente",
				"email": "info@flosferri.it",
				"availableLanguage": ["Italian", "English"]
			}
		],
		"sameAs": [
			"https://www.facebook.com/flosferri.it",
			"https://www.instagram.com/flos_ferri/"
		]
	};

	return (
		<div
			className="flex flex-col min-h-screen bg-background font-body selection:bg-gold selection:text-primary-foreground overflow-x-hidden">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Navbar/>

			<main className="grow">
				<Hero/>
				<About/>
				<Fencing/>
				<Events />
				<Camp/>
				<Dance/>
				<Contact/>
			</main>

			<Footer/>
		</div>
	);
}
