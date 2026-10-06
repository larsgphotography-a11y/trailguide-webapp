TrailGuide v1.1.0 — Deployment

1. Alle Dateien aus diesem Ordner in das Root-Verzeichnis des GitHub-Repositories trailguide-webapp kopieren und bestehende Dateien ersetzen.
2. GitHub Pages bleibt auf main / (root).
3. Nach dem Deployment die Seite einmal neu laden. Der Service Worker verwendet den Cache trailguide-v1-1-0-shell und entfernt ältere TrailGuide-Caches.
4. Bestehende Firebase- und Google-Drive-Verbindungen bleiben erhalten, weil config.js dieselben Projekt-IDs, OAuth-Client-ID und Datenpfade verwendet.
5. Beim ersten Öffnen aktualisiert die App den alten eingebauten Lenzerheide-Datensatz auf Revision 2, ohne vorhandene GPX-Drive-Verknüpfungen zu löschen.
