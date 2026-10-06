TrailGuide v1.1.0

Wichtig: Dieses Paket ist ein komplettes Update der bestehenden TrailGuide-v1-App.
Es verwendet absichtlich weiterhin:
- denselben localStorage-Präfix tg1_
- denselben Firestore-Pfad trailguideUsers
- denselben Google-Drive-Root TrailGuide

Dadurch bleiben bestehende Daten und Verbindungen erhalten.

Neu in v1.1.0:
- komplette deutsche Oberfläche (ss statt ß; ä, ö und ü werden normal verwendet)
- klare Trennung zwischen Wandern und Reisen
- GPX-Import zeichnet den echten Track als Linie auf der Karte
- Start- und Endpunkt jeder Route auf der Karte
- ÖV-/Bergbahn-Links pro Ziel und pro Route
- zeitabhängige aktuelle Informationen mit Prüfdatum
- intelligenter Import: neu / aktualisiert / unverändert
- Update-Erkennung über stabile IDs oder geografischen Fallback
- vorhandene GPX-/Drive-Verknüpfungen bleiben bei Guide-Updates erhalten
