'use client';

import React from "react";
import { useModal } from "@/hooks/use-modal";

interface StatuteModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function StatuteModal ({ isOpen, onClose }: StatuteModalProps) {
	const { dialogRef, handleBackdropClick } = useModal(isOpen, onClose);

	if (!isOpen) return null;

	return (
		<dialog
			ref={dialogRef}
			onCancel={onClose}
			onClick={handleBackdropClick}
			className="fixed inset-0 z-100 w-full h-full max-w-none max-h-none bg-background/80 backdrop-blur-sm p-4 md:p-6 border-none backdrop:bg-transparent flex items-center justify-center open:animate-in open:fade-in duration-300"
		>
			<article
				className="relative w-full max-w-4xl bg-card border border-gold/20 p-6 md:p-10 shadow-forged animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]"
				onClick={(e) => e.stopPropagation()}
				aria-labelledby="statute-title"
			>
				<button
					onClick={onClose}
					aria-label="Chiudi Statuto"
					className="absolute top-4 right-4 text-gold hover:text-foreground transition-colors bg-transparent border-none cursor-pointer p-2 z-10"
				>
					<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
					</svg>
				</button>

				<header className="text-center mb-10 pr-6">
					<h2 id="statute-title"
					    className="font-display text-2xl md:text-3xl text-gold uppercase tracking-widest mb-2">
						Statuto
					</h2>
					<div className="w-full h-px bg-gold/10 mt-6"></div>
				</header>

				<div className="flex-1 overflow-y-auto pr-4 custom-scrollbar font-body text-foreground/90 leading-relaxed">
					<div className="space-y-8">
						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo I
								- Costituzione, Finalità, Durata</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 1 Costituzione, Denominazione e Sede</h4>
									<p>
										Sulla base del principio di sussidiarietà di cui all&apos;art.118 quarto comma della
										Costituzione, in conformità al Codice civile, alla legge 106/2016 e al Decreto Legislativo
										3 luglio 2017 n.117, è costituita un&apos;Associazione di Promozione Sociale, che assume
										la denominazione di &quot;Flos Ferri APS&quot;.
										L&apos;acronimo APS e la denominazione Associazione di Promozione Sociale possono essere
										usati solo se l&apos;Associazione è iscritta nella sezione &quot;Associazioni di
										Promozione Sociale&quot; del Registro Unico Nazionale degli Enti del Terzo Settore
										(RUNTS).
										L&apos;Associazione ha sede nel Comune di Ravenna (Provincia di Ravenna). Il cambio di
										sede all&apos;interno dello stesso comune può essere deliberato dall&apos;assemblea
										sociale e non comporta modifica statutaria.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 2 Finalità</h4>
									<p className="mb-4">
										L&apos;Associazione è un Ente non commerciale e senza scopo di lucro, che opera con
										finalità civiche, solidaristiche e di utilità sociale al fine di promuovere la
										rievocazione e la ricostruzione storica, con particolare riferimento allo studio ed alla
										divulgazione di eventi storici, musica e danze, arti e mestieri, cucina, moda, giochi e
										passatempi ed arti marziali. Opera inoltre in ottemperanza ai principi costituzionali e
										morali al fine di:
									</p>
									<ul className="list-disc pl-5 space-y-2">
										<li>contribuire a dare attuazione agli articoli 2, 3, 4 e 18 della Costituzione;</li>
										<li>consentire ai propri associati e ai cittadini in genere, attraverso l&apos;attività
											esercitata, crescita civile e culturale, coesione sociale e miglioramento della qualità
											della vita;
										</li>
										<li>sostenere l&apos;autonoma iniziativa di quanti concorrono, anche in forma associata, a
											perseguire il bene comune, ad elevare i livelli di cittadinanza attiva, di coesione e
											protezione sociale, favorendo la partecipazione, l&apos;inclusione e il pieno sviluppo
											della persona;
										</li>
										<li>valorizzare il loro potenziale di crescita e di occupazione lavorativa;</li>
										<li>favorire particolarmente la partecipazione dei bambini, dei giovani, delle donne,
											degli anziani, dei cittadini comunque svantaggiati sul piano fisico, sociale,
											culturale, economico, alle attività di cui al titolo II del presente statuto, operando
											per tutelarne formalmente e concretamente i diritti, in particolare quali utenti e
											partecipanti alle attività organizzate dall&apos;Associazione.
										</li>
									</ul>
									<p className="mt-4">
										Nell&apos;ambito delle finalità e dei principi generali, essa svolge in modo principale,
										in favore dei propri associati, dei loro familiari conviventi e di terzi, le attività di
										interesse generale previste dal presente statuto, in forma o di azione volontaria, o di
										mutualità, o di erogazione gratuita di servizi o di produzione o scambio di beni e
										servizi.
										L&apos;associazione, in quanto non riconosciuta, è regolata inoltre dagli articoli 36 e
										seguenti del codice civile.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 3 Durata</h4>
									<p>
										La durata dell&apos;Associazione è illimitata. Essa potrà essere sciolta solo con delibera
										dell&apos;assemblea straordinaria degli associati, con le modalità previste dal presente
										statuto.
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo
								II - Attività esercitate</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 4 Le attività dell&apos;Associazione</h4>
									<p className="mb-2">L&apos;Associazione esercita e organizza le seguenti attività, in
										conformità a quanto previsto dagli articoli 5, 6 e 7 del decreto legislativo 117/2017, dal
										presente statuto e dalla normativa vigente, anche in collaborazione con altri Enti del
										Terzo Settore o altri soggetti pubblici e privati e anche mediante la conduzione di
										impianti, strutture e locali:</p>
									<ol className="list-decimal pl-5 space-y-1">
										<li>Attività di interesse generale;</li>
										<li>Attività secondarie e strumentali all&apos;attività istituzionale di interesse
											generale;
										</li>
										<li>Attività di raccolta fondi</li>
									</ol>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 5 Attività di interesse generale</h4>
									<p className="mb-4">Per il raggiungimento delle proprie finalità, l&apos;Associazione
										esercita e organizza in via principale e in modo prevalente, in conformità alle norme
										particolari che ne disciplinano l&apos;esercizio, le seguenti attività di interesse
										generale di cui all&apos;art. 5 del decreto legislativo 117/2017, con particolare
										riferimento alle lettere:</p>
									<ul className="space-y-3">
										<li><span className="font-bold text-gold mr-2">d)</span> educazione, istruzione e
											formazione professionale, ai sensi della legge 28 marzo 2003, n. 53, e successive
											modificazioni, nonché le attività culturali di interesse sociale con finalità
											educativa;
										</li>
										<li><span className="font-bold text-gold mr-2">f)</span> interventi di tutela e
											valorizzazione del patrimonio culturale e del paesaggio, ai sensi del decreto
											legislativo 22 gennaio 2004, n. 42, e successive modificazioni;
										</li>
										<li><span className="font-bold text-gold mr-2">i)</span> organizzazione e gestione di
											attività culturali, artistiche o ricreative di interesse sociale, incluse attività,
											anche editoriali, di promozione e diffusione della cultura e della pratica del
											volontariato e delle attività di interesse generale di cui al presente articolo;
										</li>
										<li><span className="font-bold text-gold mr-2">k)</span> organizzazione e gestione di
											attività turistiche di interesse sociale, culturale o religioso;
										</li>
										<li><span className="font-bold text-gold mr-2">t)</span> organizzazione e gestione di
											attività sportive dilettantistiche;
										</li>
										<li><span className="font-bold text-gold mr-2">z)</span> riqualificazione di beni pubblici
											inutilizzati o di beni confiscati alla criminalità organizzata.
										</li>
									</ul>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 6 Attività secondarie e strumentali alle
										attività istituzionali di interesse generale</h4>
									<p className="mb-4">Per il raggiungimento delle proprie finalità, e al fine di finanziare le
										proprie attività di interesse generale, l&apos;Associazione inoltre può esercitare e
										organizzare, a norma dell&apos;art. 6 del decreto legislativo 117/2017, ulteriori
										attività, secondarie e strumentali rispetto alle attività di interesse generale di cui al
										presente statuto, secondo criteri e limiti definiti con decreto del Ministero del Lavoro e
										delle Politiche Sociali 19 maggio 2021 n.107. In particolare, può effettuare:</p>
									<ul className="list-none space-y-3">
										<li><span className="font-bold text-gold mr-2">a)</span> attività commerciali strettamente
											funzionali a raggiungere gli scopi statutari e ogni altra attività connessa e
											funzionale al raggiungimento degli scopi associativi consentita agli enti senza fini di
											lucro dalle disposizioni legislative vigenti. L&apos;individuazione di tali attività è
											demandata al Consiglio direttivo dell&apos;associazione;
										</li>
										<li><span className="font-bold text-gold mr-2">b)</span> la somministrazione di alimenti e
											bevande al pubblico in occasione di particolari eventi o manifestazioni, per il periodo
											di svolgimento delle stesse, nei locali e/o negli spazi dove tali manifestazioni si
											svolgono, alle condizioni previste dall&apos;art. 70 del decreto legislativo 117/2017;
										</li>
										<li><span className="font-bold text-gold mr-2">c)</span> in quanto affiliata AICS, Ente
											ricompreso tra quelli di cui all&apos;articolo 3, comma 6, lettera e), della legge 25
											agosto 1991, n. 287, iscritto nell&apos;apposito registro, le cui finalità
											assistenziali sono riconosciute dal Ministero dell&apos;Interno, la somministrazione di
											alimenti e bevande nei confronti dei propri iscritti, dei propri associati e dei
											familiari conviventi degli stessi, nonché nei confronti di altre associazioni di
											promozione sociale che svolgono la medesima attività e che per legge, regolamento, atto
											costitutivo o statuto fanno parte di un&apos;unica organizzazione locale o nazionale,
											dei rispettivi associati o iscritti e dei tesserati dalle rispettive organizzazioni
											nazionali, presso le sedi in cui viene svolta l&apos;attività istituzionale, a fronte
											di corrispettivi specifici, secondo la normativa vigente.
										</li>
									</ul>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 7 Attività di raccolta fondi</h4>
									<p>
										Per il raggiungimento delle proprie finalità, e al fine di finanziare le proprie attività
										di interesse generale, l&apos;associazione può esercitare anche attività di raccolta
										fondi, secondo quanto previsto dagli art. 7 e 79 del decreto legislativo 117/2017,
										attraverso la richiesta a terzi di donazioni, lasciti e contributi di natura non
										corrispettiva.
										L&apos;attività di raccolta fondi può essere realizzata sia occasionalmente, anche
										mediante offerte di beni di modico valore o di servizi ai sovventori, in concomitanza di
										celebrazioni, ricorrenze o campagne di sensibilizzazione, sia in forma organizzata e
										continuativa, anche mediante sollecitazione al pubblico o attraverso la cessione o
										erogazione di beni o servizi di modico valore, impiegando risorse proprie e di terzi,
										inclusi volontari e dipendenti, nel rispetto dei principi di verità, trasparenza e
										correttezza nei rapporti con i sostenitori e con il pubblico, secondo le Linee Guida
										adottate con Decreto Ministero del Lavoro e delle Politiche Sociali 9 giugno 2022 e
										successive modificazioni e integrazioni.
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo
								III - Funzionamento e Amministrazione</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 8 Gestione e modalità di svolgimento
										delle attività organizzate</h4>
									<p>
										Per la realizzazione delle sue attività, per la gestione sul territorio, a tutti i
										livelli, di progetti in materia di associazionismo sociale, per la realizzazione di
										specifici obiettivi, per la gestione diretta di determinati servizi, l&apos;Associazione
										può collaborare con altri enti del terzo settore e con enti senza fini di lucro nonché con
										soggetti pubblici e privati. Può inoltre stipulare con essi accordi e convenzioni e
										promuovere e/o costituire e/o aderire, e/o collaborare con Associazioni, Istituti,
										Fondazioni, Cooperative, Imprese sociali e/o altri enti di carattere strumentale senza
										fini di lucro. Per la gestione e le modalità di svolgimento delle attività di interesse
										generale privilegia gli apporti che si basano sulle prestazioni personali, spontanee,
										volontarie e gratuite, senza fini di lucro, neanche indiretti e si avvale in modo
										prevalente dell&apos;attività di volontariato dei propri associati o delle persone
										aderenti agli enti associati.
										Quando ciò sia necessario ai fini del perseguimento delle proprie finalità e allo
										svolgimento delle proprie attività, nei limiti di quanto previsto dall&apos;art. 36 del
										decreto legislativo 117/2017, l&apos;Associazione può ricorrere a prestazioni di lavoro
										autonomo o di altra natura, o di lavoro dipendente, o ad altre forme di collaborazione
										consentite dalla legge, anche dei propri associati.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 9 Apporto dei volontari</h4>
									<p>
										I volontari sono persone che per loro libera scelta svolgono, per il tramite
										dell&apos;associazione, attività in favore della comunità e del bene comune, mettendo a
										disposizione il proprio tempo e le proprie capacità. La loro qualifica è incompatibile con
										qualsiasi forma di rapporto di lavoro subordinato o autonomo e con ogni altro rapporto di
										lavoro retribuito con l&apos;associazione. La loro attività non può essere retribuita in
										alcun modo, nemmeno dal beneficiario. Ai volontari possono essere rimborsate soltanto le
										spese effettivamente sostenute e documentate per l&apos;attività prestata, entro limiti
										massimi e alle condizioni preventivamente stabilite dal Consiglio Direttivo
										dell&apos;Associazione, anche con i criteri di cui all&apos;articolo 17 comma 4 del
										decreto legislativo 117/2017. Sono in ogni caso vietati rimborsi spese di tipo forfetario.
										Secondo quanto previsto dagli articoli 17 e 18 del d.lgs. 117/2017, con le modalità di cui
										al decreto Ministero dello Sviluppo economico 6 ottobre 2021 e successive modificazioni e
										integrazioni, tutti i volontari devono essere assicurati contro le malattie e gli
										infortuni connessi allo svolgimento dell&apos;attività di volontariato, nonché per la
										responsabilità civile verso terzi, e coloro che svolgono la loro attività in modo non
										occasionale devono essere inoltre iscritti in un apposito registro.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 10 Esercizio Sociale, Bilancio
										d&apos;Esercizio, Scritture Contabili, Bilancio Sociale</h4>
									<p className="mb-4">L&apos;esercizio sociale si svolge dal 1° gennaio al 31 dicembre di ogni
										anno. Per ogni esercizio sociale il Consiglio Direttivo predispone il bilancio di
										esercizio. Se l&apos;Associazione ha conseguito ricavi inferiori a 220.000,00 euro, il
										bilancio può essere redatto sotto forma di rendiconto di cassa. Il bilancio di esercizio
										deve essere approvato dall&apos;Assemblea sociale entro il 30 aprile di ogni anno e
										depositato presso il registro unico del terzo settore entro il 30 giugno. Qualora i ricavi
										superino 1 milione di euro, deve essere redatto inoltre il bilancio sociale.</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 11 Informativa sociale</h4>
									<p>
										Il bilancio di esercizio e il bilancio sociale devono essere affissi presso la sede
										sociale, e trasmessi a tutti gli associati aventi diritto al voto oppure pubblicizzati per
										il tramite del sito sociale. Se i ricavi sono superiori a 100.000,00 euro, gli eventuali
										emolumenti a componenti degli organi di amministrazione e controllo devono essere
										pubblicati sul sito internet dell&apos;associazione.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 12 Patrimonio</h4>
									<p>
										Il patrimonio dell&apos;Associazione è costituito dai beni mobili e immobili di proprietà,
										eccedenze degli esercizi, donazioni, erogazioni e lasciti. Il patrimonio è utilizzato per
										lo svolgimento dell&apos;attività statutaria. È vietata la distribuzione, anche indiretta,
										di utili ed avanzi di gestione a fondatori, associati, lavoratori e amministratori.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 13 Fonti di finanziamento</h4>
									<p>
										Le fonti di finanziamento includono quote annuali, proventi dalla gestione del patrimonio,
										ricavato delle attività, contributi pubblici e privati, convenzioni ed erogazioni
										liberali.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 14 Libri sociali e Registro dei
										Volontari</h4>
									<p>
										L&apos;Associazione tiene i libri degli associati, delle adunanze dell&apos;Assemblea e
										del Consiglio Direttivo, nonché il registro dei volontari. Tutti gli associati in regola
										hanno diritto di esaminare i libri sociali.
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo
								IV - Gli Associati</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 15 Adesione all&apos;Associazione</h4>
									<p>
										L&apos;associazione non dispone limitazioni all&apos;ammissione degli associati. Possono
										aderire tutte le persone fisiche e gli Enti del Terzo settore che ne condividono i
										principi. Per aderire si deve farne richiesta scritta al Consiglio Direttivo.
										L&apos;accoglimento dà diritto alla tessera sociale. La quota non è rimborsabile né
										trasmissibile.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 16 Diritti degli associati</h4>
									<p>
										Gli associati hanno diritto a partecipare alle attività, alle assemblee, approvare bilanci
										e statuto, eleggere gli organi sociali. È garantita la libera eleggibilità degli organi
										amministrativi secondo il principio del voto singolo.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 17 Doveri degli associati</h4>
									<p>
										Gli associati sono tenuti a sostenere le finalità dell&apos;Associazione, osservare lo
										statuto e versare le quote sociali stabilite.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 18 Perdita della qualifica di
										associato</h4>
									<p>
										La qualifica si perde per dimissioni, scioglimento dell&apos;Associazione, decesso,
										esclusione per morosità o espulsione per gravi infrazioni. Competente è il Consiglio
										Direttivo con deliberazioni motivate.
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo V
								- Organi dell&apos;Associazione</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 19 Organi Sociali</h4>
									<p>Sono Organi dell&apos;Associazione: L&apos;Assemblea Sociale, il Consiglio Direttivo e il
										Presidente.</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 20 L&apos;Assemblea Sociale</h4>
									<p>
										È il massimo organo dell&apos;Associazione. Approva il bilancio, nomina i componenti degli
										organi sociali e delibera sulle modifiche statutarie. Ogni associato ha diritto a un voto
										e può essere titolare di una delega.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 21 Il Consiglio Direttivo</h4>
									<p>
										Eletto dall&apos;Assemblea, è composto da 3 a 9 membri. Dura in carica 4 anni. Attua gli
										indirizzi dell&apos;Assemblea e approva i programmi di attività.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 22 Il Presidente</h4>
									<p>
										Eletto dall&apos;Assemblea, ha la rappresentanza legale dell&apos;Associazione. Dura in
										carica 4 anni ed è rieleggibile.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 23 L&apos;Organo di Controllo</h4>
									<p>
										Nominato obbligatoriamente al superamento dei limiti di legge o per volontà
										dell&apos;Assemblea. Vigila sull&apos;osservanza della legge e dello statuto.
									</p>
								</article>
							</div>
						</section>

						<section>
							<h3 className="font-display text-xl text-gold border-b border-gold/10 pb-2 mb-4 uppercase">Titolo
								VI - Disposizioni varie e finali</h3>

							<div className="space-y-6">
								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 26 Modifiche allo statuto</h4>
									<p>
										Le modifiche sono approvate dall&apos;Assemblea con il voto favorevole di almeno i due
										terzi dei presenti, secondo i quorum costitutivi previsti.
									</p>
								</article>

								<article>
									<h4 className="font-bold text-foreground mb-2">Art. 28 Scioglimento e devoluzione del
										patrimonio</h4>
									<p>
										Per lo scioglimento occorre il voto favorevole di almeno tre quarti degli associati. Il
										patrimonio residuo è devoluto ad altri Enti del Terzo Settore.
									</p>
								</article>
							</div>
						</section>
					</div>

					<aside className="mt-12 text-center text-foreground/60 italic text-sm">
						<p>Per quanto non contemplato nel presente Statuto, si applica quanto disposto dal decreto 117/2017 e
							dal Codice civile.</p>
					</aside>
				</div>

				<footer className="mt-8 pt-6 border-t border-gold/10 text-center shrink-0">
					<button
						onClick={onClose}
						className="border border-gold/40 text-gold font-display uppercase tracking-widest text-xs px-10 py-4 hover:bg-gold/10 transition-colors cursor-pointer font-bold"
					>
						Chiudi Statuto
					</button>
				</footer>
			</article>
		</dialog>
	);
}
