# TrailGuide HikingGuide Format v2

Ein `.hikingguide` ist JSON mit `format: "hikingguide"`.

## Identität und Updates
- `id` MUSS über spätere Aktualisierungen stabil bleiben.
- Falls `id` fehlt, erkennt TrailGuide ein bestehendes Ziel über Land + Region + Zielname.
- `updated_at` beschreibt die inhaltliche Aktualisierung.
- `source_checked_at` beschreibt, wann externe Informationen zuletzt geprüft wurden.
- `revision` kann für grössere Guide-Revisionen erhöht werden.
- Beim Import eines bereits bekannten Guides werden Inhalte aktualisiert; lokale Drive-Dokumente, GPX-Dateireferenzen und vorhandene GPX-Geometrie bleiben erhalten, sofern das Update sie nicht ausdrücklich ersetzt.

## Route
Jede Route sollte eine stabile `id` besitzen und kann enthalten:
- `name`, `distance_km`, `duration_min`, `ascent_m`, `descent_m`
- `difficulty`, `activity`, `description`, `highlights[]`
- `start: {name,lat,lng}`
- `end: {name,lat,lng}`
- `gpx_geometry: [[lat,lng], ...]` (wird normalerweise beim GPX-Import erzeugt)
- `gpx_drive` (Drive-Metadaten der Originaldatei)
- `source_url`, `source_checked_at`, `updated_at`
- `access_links[]`

## Anreise / Zugang
`access_links[]` kann auf Ziel- oder Routenebene stehen:
```json
{
  "type": "public_transport",
  "provider": "SBB",
  "label": "Fahrplan zum Startpunkt",
  "url": "https://...",
  "note": "PostAuto ab Chur"
}
```
Für private Bergbahnen kann `type: "cable_car"` und die offizielle Betreiber-Webseite verwendet werden.

## Aktuelle Informationen
`current_info[]` ist für zeitabhängige Angaben wie Betriebszeiten, saisonale Zufahrten oder Sperrungen gedacht. Jeder Eintrag sollte `checked_at` und möglichst eine `url` zur Quelle enthalten.
