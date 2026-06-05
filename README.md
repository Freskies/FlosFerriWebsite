# Flos Ferri Website - Guida Completa alla Gestione dei Contenuti

Benvenuto nella guida dettagliata per l'aggiornamento e la manutenzione dei contenuti del sito web dell'associazione
culturale Flos Ferri.

Seguendo questa guida passo dopo passo sarai in grado di ottimizzare correttamente le immagini e di aggiornare sia il
carosello della home page sia l'elenco degli eventi agendo in totale sicurezza sui file di configurazione JSON.

---

# 1. Fase Preliminare: Ottimizzazione delle Immagini

Per garantire che il sito web sia veloce e si carichi rapidamente anche da dispositivi mobili, le immagini non possono
essere caricate direttamente così come escono dalla fotocamera o dallo smartphone. Devono essere convertite in formato
WebP e ridimensionate secondo regole geometriche precise.

## A. Specifiche Tecniche delle Immagini

Prima di iniziare, identifica dove andrà posizionata l'immagine per conoscere i requisiti di dimensione.

### Immagini per il Carosello (Homepage)

Il sito mostra queste immagini con una proporzione fissa di **1200 × 900 px**.

Quando ridimensioni l'immagine su [ResizePixel](https://www.resizepixel.com/) devi mantenere l'aspect ratio (le proporzioni originali). Fai in modo che
una delle due dimensioni sia impostata sul valore corretto (**1200** per la larghezza oppure **900** per l'altezza) e
che l'altra sia uguale o superiore al minimo richiesto.

> **Nota sulla centratura**
>
> Il programma del sito web centra automaticamente l'immagine e taglia le parti in eccesso. Ad esempio, se carichi
> un'immagine ridimensionata a **1200 × 1000 px**, il sistema taglierà automaticamente **50 pixel sopra** e **50 pixel
sotto**.
>
> Evita quindi di posizionare soggetti importanti o testi troppo vicini ai bordi superiori e inferiori.

### Immagini di Copertina per gli Eventi (Covers)

Le immagini associate agli eventi devono essere:

* larghe almeno **1024 px**
* alte almeno **900 px**

## B. Procedura Passo-Passo su ResizePixel

1. Apri il browser e vai sul sito [ResizePixel](https://www.resizepixel.com/).
2. Clicca su **Upload Image** e seleziona il file dal tuo computer.

### OPERAZIONE 1 – CONVERSIONE

Prima di modificare la grandezza:

1. Vai alla sezione **Convert**.
2. Seleziona il formato **WebP**.
3. Clicca sul pulsante di conversione.

### OPERAZIONE 2 – RIDIMENSIONAMENTO

1. Spostati nella sezione **Resize**.
2. Assicurati che sia attiva la spunta per mantenere le proporzioni (**Aspect Ratio**).

#### Se è una foto per il Carosello

* Modifica la larghezza a **1200 px** oppure l'altezza a **900 px**.
* Controlla che l'altra dimensione sia comunque sufficiente a coprire l'area minima richiesta (**1200 × 900**).
* Clicca su **Resize**.

#### Se è una foto per un Evento

* Imposta una larghezza finale di almeno **1024 px**.
* Imposta un'altezza finale di almeno **900 px**.
* Clicca su **Resize**.

Infine:

1. Clicca su **Go to Download**.
2. Scarica il file finale con estensione **.webp**.

---

# 2. Caricamento Fisico dei File Immagine

Una volta scaricata l'immagine ottimizzata in formato `.webp`, devi inserirla all'interno dei file del sito web.

La cartella di destinazione cambia a seconda dell'uso che ne farai.

### Immagini del Carosello

Caricale nella cartella:

```text
public/carousel/
```

### Copertine degli Eventi

Caricale nella cartella:

```text
public/covers/
```

> 💡 **Consiglio**
>
> Segnati con precisione il nome del file appena salvato (ad esempio `donne.webp` oppure `soldati.webp`), prestando
> attenzione a maiuscole, minuscole ed eventuali trattini.

---

# 3. Aggiornamento dei file JSON (Inserimento Dati)

Tutti i testi e le configurazioni del sito si trovano all'interno di file JSON presenti nella cartella:

```text
data/
```

Puoi aprirli e modificarli con qualsiasi editor di testo (Blocco Note, VS Code, ecc.).

## A. Aggiungere o Modificare Immagini nel Carosello (`data/carousel.json`)

Apri il file:

```text
data/carousel.json
```

Per aggiungere una nuova immagine inserisci un nuovo blocco JSON separato dal precedente tramite una virgola.

### Struttura del blocco

```json
{
    "src": "/carousel/nome-del-file.webp",
    "alt": "Breve descrizione testuale dell'immagine"
}
```

### Esempio reale

```json
{
    "src": "/carousel/donne.webp",
    "alt": "Donne in abiti medievali"
}
```

## B. Aggiungere o Modificare Eventi (`data/events.json`)

Apri il file:

```text
data/events.json
```

Ogni evento è racchiuso tra parentesi graffe ed è separato dagli altri tramite una virgola.

### Template vuoto

```json
{
    "id": "nome-evento-anno",
    "title": {
        "it": "Titolo in Italiano",
        "en": "English Title"
    },
    "date": "AAAA-MM-GG",
    "endDate": "AAAA-MM-GG",
    "location": "Città (Provincia)",
    "category": {
        "it": "CATEGORIA_ITA",
        "en": "CATEGORIA_ENG"
    },
    "description": {
        "it": "Descrizione dettagliata dell'evento in italiano.",
        "en": "Detailed description of the event in English."
    },
    "image": "nome-file.webp"
}
```

### Esempio reale

```json
{
    "id": "historia-fest-2026",
    "title": {
        "it": "Historia Fest",
        "en": "Historia Fest"
    },
    "date": "2026-05-23",
    "endDate": "2026-05-24",
    "location": "Lucca",
    "category": {
        "it": "RIEVOCAZIONE",
        "en": "REENACTMENT"
    },
    "description": {
        "it": "Campo, didattica, tornei, battagliola.",
        "en": "Camp, teaching, tournaments, battle."
    },
    "image": "soldati.webp"
}
```

---

# 4. Note Importanti e Regole di Compilazione

Per evitare che il sito web mostri errori o smetta di funzionare, segui rigorosamente queste regole.

## ID Unico

Il campo `"id"` deve essere unico per ogni evento.

✅ Corretto:

```text
torneo-flos-ferri-2026
```

Utilizza esclusivamente:

* lettere minuscole
* numeri
* trattini

## Formato delle Date

Il formato deve essere sempre:

```text
AAAA-MM-GG
```

Esempio:

```text
2026-05-23
```

## Categorie Ammesse

Il sistema riconosce esclusivamente queste categorie:

| Italiano     | Inglese     |
|--------------|-------------|
| TORNEO       | TOURNAMENT  |
| FESTA        | FESTIVAL    |
| RIEVOCAZIONE | REENACTMENT |
| DIDATTICA    | EDUCATIONAL |

## Sintassi del Nome Immagine

### Nel file `events.json`

Inserisci soltanto il nome del file:

```json
"image": "soldati.webp"
```

❌ Non scrivere:

```json
"image": "/covers/soldati.webp"
```

### Nel file `carousel.json`

Inserisci il percorso completo relativo:

```json
"src": "/carousel/donne.webp"
```

## Attenzione alle Virgole

Nel linguaggio JSON:

* tutti gli elementi devono essere separati da una virgola `,`
* l'ultimo elemento della lista **non deve avere una virgola finale**

### Corretto

```json
[
    {
        "nome": "Evento 1"
    },
    {
        "nome": "Evento 2"
    }
]
```

### Errato

```json
[
    {
        "nome": "Evento 1"
    },
    {
        "nome": "Evento 2"
    }
]
```

La virgola finale genera un errore di lettura che può impedire il corretto funzionamento del sito.

---

Per maggiori dettagli tecnici di livello avanzato sulla struttura globale dei dati del sito, consulta la documentazione
integrativa presente in:

```text
data/data-structure.md
```
