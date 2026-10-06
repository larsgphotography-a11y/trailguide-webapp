# TrailGuide HikingGuide Format v3

A `.hikingguide` is UTF-8 JSON with `format: "hikingguide"`.

## GPX route support
Each route may contain one of:
- `gpx_text`: the complete original GPX XML as a JSON string
- `gpx_geometry`: `[[lat,lng], ...]`
- `gpx.geometry`: same coordinate array
- `track`: same coordinate array

TrailGuide parses `<trkpt>` first and falls back to `<rtept>`. The resulting full geometry is stored locally and drawn on route, destination and global maps.

A metadata-only HikingGuide is also supported. Open its route and tap **GPX-Datei hinzufügen / ersetzen** to attach the original GPX manually.

Re-import with the same stable guide/route IDs preserves an already stored GPX unless the new guide explicitly supplies replacement GPX.
