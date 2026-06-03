# Flos Ferri Website

Sito web per l'associazione culturale Flos Ferri.

## Guida per l'aggiunta di Eventi

### 1. Preparazione dell'Immagine

Per garantire prestazioni ottimali del sito, le immagini devono essere leggere.

- Vai su [ResizePixel](https://www.resizepixel.com/).
- Carica la tua immagine.
- Ridimensionala se necessario (consigliato: larghezza massima 1200px).
- Vai alla sezione "Convert" e seleziona il formato **WebP**.
- Scarica l'immagine convertita.

### 2. Caricamento dell'Immagine

- Carica il file `.webp` nella cartella `public/event_covers/`.
- Prendi nota del nome esatto del file (es: `festa-medievale.webp`).

### 3. Aggiunta dell'Evento

- Apri il file `data/events.json`.
- Aggiungi un nuovo oggetto alla lista seguendo questo template:

```json
{
    "id": "nome-evento-2026",
    "title": {
        "it": "Titolo in Italiano",
        "en": "English Title"
    },
    "date": "2026-06-15",
    "endDate": "2026-06-16",
    "location": "Città (Provincia)",
    "category": {
        "it": "RIEVOCAZIONE",
        "en": "REENACTMENT"
    },
    "description": {
        "it": "Descrizione dettagliata in italiano.",
        "en": "Detailed description in English."
    },
    "image": "nome-file.webp"
}
```

### Note Importanti

- **ID**: Deve essere unico per ogni evento.
- **Date**: Formato `YYYY-MM-DD`.
- **Categorie**: Usa solo quelle permesse (`TORNEO`, `FESTA`, `RIEVOCAZIONE`, `DIDATTICA`).
- **Immagine**: Inserisci solo il nome del file (es: `soldati.webp`), senza il percorso della cartella.

Per maggiori dettagli tecnici sulla struttura dati, consulta [data/data-structure.md](./data/data-structure.md).
