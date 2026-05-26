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
	return (
		<div
			className="flex flex-col min-h-screen bg-background font-body selection:bg-gold selection:text-primary-foreground overflow-x-hidden">
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
