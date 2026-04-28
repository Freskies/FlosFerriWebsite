export default function Camp () {
	return (
		<section id="camp" className="py-24 px-6 relative bg-background border-y border-gold/10">
			<div className="max-w-4xl mx-auto text-center">
				<div className="flex justify-center mb-8">
					<div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center">
						<div className="w-12 h-12 border border-gold/60 rounded-full animate-pulse"></div>
					</div>
				</div>
				
				<h2 className="text-4xl md:text-5xl font-display text-gold mb-12 tracking-widest font-bold">
					L'Accampamento
				</h2>
				
				<div className="relative p-10 md:p-16 border border-gold/20 shadow-forged rounded-sm bg-card/10">
					<div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
					<div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
					<div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
					<div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />
					
					<p className="text-2xl md:text-3xl leading-relaxed text-foreground/90 italic font-body font-medium">
						&ldquo;L’accampamento è il fulcro attorno a cui ruotano tutte le attività associative, non è quindi sorprendente che esso sia continuamente in espansione e aggiornamento, ed essendo un campo vivente ed abitato 24 ore al giorno, altrettanto facilmente lo troverete in disordine. Contrariamente a quanto si possa pensare però, questa è una cosa di cui andiamo orgogliosi. Il campo infatti non è semplicemente uno sfondo o una scenografia, è un accampamento vero e proprio e come tale deve funzionare, i velari ci proteggono dal sole e dalla pioggerella, le tende ci proteggono dall’umidità della notte come dai capricciosi temporali estivi, tavoli e panche divengono una mensa e un punto di ritrovo dopo una giornata di lavoro, mentre le rastrelliere raccolgono le armi e le armature in modo che siano sempre visibili e accessibili al pubblico. E’ per questo motivo che il nostro campo non sarà mai perfetto, ma allo stesso tempo pare assai reale e accogliente, pensato volta per volta per accogliere il pubblico e metterlo in condizione di vedere, sentire e toccare con mano tutto ciò che desidera.&rdquo;
					</p>
					
					<div className="mt-8 flex justify-center gap-4">
						<div className="w-2 h-2 rotate-45 bg-gold/40" />
						<div className="w-2 h-2 rotate-45 bg-gold" />
						<div className="w-2 h-2 rotate-45 bg-gold/40" />
					</div>
				</div>
			</div>
		</section>
	);
}
