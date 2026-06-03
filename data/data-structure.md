# Struttura Dati Eventi

I dati degli eventi sono memorizzati in `data/events.json`. Ogni evento deve seguire la struttura descritta di seguito.

## Campi dell'Evento

- `id`: Stringa univoca identificativa (es: `festa-medievale-2026`).
- `title`: Oggetto contenente le traduzioni del titolo.
  - `it`: Titolo in italiano.
  - `en`: Titolo in inglese.
- `date`: Data di inizio nel formato `YYYY-MM-DD`.
- `endDate`: (Opzionale) Data di fine nel formato `YYYY-MM-DD`. Da usare se l'evento dura più giorni.
- `location`: Luogo dell'evento (es: "Ravenna").
- `category`: Oggetto contenente le traduzioni della categoria.
  - `it`: Una delle categorie permesse in italiano.
  - `en`: Traduzione della categoria in inglese.
- `description`: Oggetto contenente le traduzioni della descrizione.
  - `it`: Descrizione in italiano.
  - `en`: Descrizione in inglese.
 - `image`: Nome del file dell'immagine presente in `public/event_covers/` (es: `evento.webp`).

## Categorie Permesse

Le categorie utilizzabili sono strettamente limitate a:

1. **TORNEO** (EN: TOURNAMENT)
2. **FESTA** (EN: FESTIVAL)
3. **RIEVOCAZIONE** (EN: REENACTMENT)
4. **DIDATTICA** (EN: TEACHING)

## Esempio di Formattazione

```json
{
  "id": "nome-evento-2026",
  "title": {
    "it": "Nome Evento",
    "en": "Event Name"
  },
  "date": "2026-05-24",
  "location": "Lucca",
  "category": {
    "it": "RIEVOCAZIONE",
    "en": "REENACTMENT"
  },
  "description": {
    "it": "Descrizione in italiano.",
    "en": "Description in English."
  },
  "image": "soldati.jpeg"
}
```
