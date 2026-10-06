# TrailGuide TravelPlan Format v2

Ein `.travelplan` ist JSON mit `format: "travelplan"`.

Eine Reise ist ein datierter Reiseplan und bewusst von der Wanderbibliothek getrennt. Sie kann mehrere Wanderziele aus verschiedenen Regionen verknüpfen.

Empfohlene Felder:
- `id` stabile Kennung
- `name`
- `country`, `region`
- `start_date`, `end_date`
- `notes`
- `destination_ids[]`
- `documents[]` für Drive-Dateireferenzen
- `updated_at`

Beim Import wird eine bestehende Reise anhand `id` erkannt; ohne ID wird Name + Datumsbereich als Fallback verwendet.
