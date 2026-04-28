import Image from 'next/image';

export default function Fencing () {
	return (
		<section id="fencing" className="py-24 px-6 relative bg-card/30 border-y border-gold/10">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className="relative group overflow-hidden rounded-sm border border-gold/20 shadow-forged aspect-square">
						<Image 
							src="https://images.unsplash.com/photo-1599583863916-e06c29087f51?w=800&q=80" 
							alt="Historical Fencing" 
							fill
							className="object-cover transition-transform duration-700 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
						<div className="absolute bottom-6 left-6 z-10">
							<span className="font-script text-gold text-lg font-bold">Scherma Medievale</span>
						</div>
					</div>
					
					<div className="space-y-8">
						<div className="ornament-divider w-24"></div>
						<h2 className="text-4xl md:text-5xl font-display text-foreground tracking-wide font-bold">
							Scherma Medievale
						</h2>
						<div className="space-y-6 text-foreground/80 text-lg leading-relaxed font-body font-medium">
							<p className="text-xl italic text-gold/90 border-l-2 border-gold/30 pl-6 py-2 font-semibold">
								Il Flos Ferri annovera tra le sue fila un group di armati, dedito allo studio della scherma medievale, ed un corpo di ballo, che propone danze del rinascimento italiano ed europeo.
							</p>
							<p>Spostandoci con il nostro accampamento abbiamo l’occasione di potere rievocare eventi storici, come battaglie o cerimonie, o più semplicemente di poterci esibire in duelli e balli nel corso dei banchetti e delle feste che si svolgono nei borghi d’Italia.</p>
							<p>Tutte le nostre attività, così come i costumi, le armi e l’accampamento, sono ricostruite sulla base di ricerche condotte sulle fonti dell’epoca, su studi e trattati universitari e su pubblicazioni dedicate.</p>
							<p className="text-sm uppercase tracking-widest text-gold/60 pt-4 font-display font-bold">
								In particolar modo, i trattati su cui basiamo la nostra scherma sono l’ I33 ed il Flos Duellatorum, in omaggio al cui autore – Fiore de’ Liberi – nasce il nome della compagnia.
							</p>
						</div>
					</div>
				</div>
				
				<div className="mt-20 grid md:grid-cols-3 gap-8">
					<div className="p-8 border border-gold/10 bg-background/50 hover:border-gold/30 transition-colors shadow-forged rounded-sm">
						<p className="text-base leading-relaxed text-foreground/70 italic font-medium">
							Nascendo come gruppo di armati, l’attività principale del Flos Ferri è lo studio delle tecniche e delle arti belliche di un periodo che va dalla fine del XIII° secolo all’inizio del XV°, giunte sino a noi grazie all’opera di grandi maestri o di anonimi che hanno raccolto sulla pergamena gli innumerevoli modi per uscire vivi da una battaglia, da un duello o, più semplicemente, da una rissa di strada.
						</p>
					</div>
					<div className="p-8 border border-gold/10 bg-background/50 hover:border-gold/30 transition-colors shadow-forged rounded-sm">
						<p className="text-base leading-relaxed text-foreground/70 italic font-medium">
							Purtroppo la documentazione che ci è pervenuta non spiega nei dettagli come combattevano gli uomini del tempo, pertanto è qui che inizia il nostro lavoro di ricostruzione e ricerca. Attraverso l’analisi dei trattati, la pratica di anni di esercizio, lo studio delle armi e delle armature, cerchiamo di capire quali erano i principi che stavano alla base di quella che a tutti gli effetti è un’arte marziale, che nulla ha da invidiare alle più blasonate tecniche orientali.
						</p>
					</div>
					<div className="p-8 border border-gold/10 bg-background/50 hover:border-gold/30 transition-colors shadow-forged rounded-sm">
						<p className="text-base leading-relaxed text-foreground/70 italic font-medium">
							Il risultato di questo lavoro, che procede anno per anno, si riassume nei pochi minuti di un duello, o nelle fasi più concitate di una battaglia campale, regalandoci la soddisfazione di aver dato il massimo ed essere ripagati da un applauso o da un complimento.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
