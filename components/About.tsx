export default function About () {
	return (
		<section id="about" className="py-24 px-6 relative overflow-hidden">
			<div className="max-w-5xl mx-auto text-center">
				<div className="ornament-divider w-full max-w-xs mx-auto mb-8">
					<span className="font-script text-gold uppercase tracking-widest text-xs">La Compagnia</span>
				</div>
				<h2 className="font-display text-4xl md:text-5xl mt-8 mb-10 text-foreground font-bold">
					Chi Siamo
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left items-start">
					<div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-body font-medium">
						<p className="first-letter:text-5xl first-letter:font-display first-letter:text-gold first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none">
							L’associazione Flos Ferri nasce nella primavera del 2001 per volontà di Gianluca Falcone e Marco
							Signorini, i quali, dopo alcuni anni di pratica “solitaria” dell’arte della Scherma Medievale,
							hanno deciso di trasmettere e condividere la loro passione con chiunque fosse interessato a questa
							disciplina.
						</p>
						<p>Il gruppo si occupa principalmente della ricostruzione delle tecniche schermistiche, studiate
							attraverso documenti storici e manuali che trattano la vita e l’arte della guerra del periodo che
							va dalla fine XIII° secolo all’ inizio XV° secolo, concentrando l’attenzione verso la scuola
							italiana del celeberrimo Fiore Dei Liberi.</p>
						<p>L’attività del gruppo si snoda quindi tra gli allenamenti in palestra e le esibizioni di
							combattimento in pubblico. Questa attività, che è la colonna fondante e portante dell’associazione,
							è supportata e completata dalle attività di rievocazione e ricostruzione storica, e dalle attività
							divulgative e didattiche, che ruotano attorno all’accampamento storico, funzionale e vitale, nonché
							fiore all’occhiello del gruppo.</p>
					</div>
					<div className="space-y-6 text-lg leading-relaxed text-foreground/80 font-body font-medium">
						<p>L’associazione Flos Ferri annovera inoltre tra le sue fila anche un gruppo di ballo che si occupa
							di danze italiane ed europee dei secoli XV°/XVI°, per il quale sono stati realizzati appositamente
							costumi storici dei periodi e dei lignaggi adeguati.</p>
						<p>Durante questi lunghi anni il gruppo ha subito come sovente accade una sua evoluzione ed una
							maturazione, oggi l’attenzione ai dettagli e all’accuratezza di indumenti e oggetti è un punto
							assai importante di tutta l’attività, ma di comune accordo, abbiamo deciso di restare fedeli alla
							nostra vocazione, che è il combattimento, sempre animati dal desiderio di inscenare gesta
							emozionanti e verosimili in completa sicurezza.</p>
						<p>Oltre ad essere appagante e divertente per noi, e ad avvicinare molti giovani alla cultura e alle
							tradizioni europee tramite l’esercizio marziale, il combattimento è l’occasione per suscitare
							l’interesse del pubblico ed attirarlo in un breve viaggio nel tempo che può toccare i più disparati
							aspetti della vita medievale.</p>
						<p className="italic text-gold/80 pt-4 border-t border-gold/10">Attraverso le pagine di questo sito
							potrete scoprire e capire meglio chi siamo, quali sono le nostre attività e perchè pratichiamo
							discipline apparentemente pericolose e così… fuorimoda.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
