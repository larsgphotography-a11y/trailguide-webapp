TrailGuide v1.3.0 — merged v1.1 + v1.2
========================================

This build deliberately uses v1.1 as the feature/UI base and merges the useful GPX changes from v1.2.

Retained from v1.1:
- Full 5-tab UI (Start / Wandern / Reisen / Karte / Mehr)
- Country → Region → Destination organization
- Trips and destination linking
- Manual route creation
- Travel documents
- Firebase TrailGuide Cloud
- Google Drive integration and Drive backups
- Import/export and ZIP import
- Full richer UI

Merged from v1.2:
- Full GPX track display on route/destination/global maps
- Embedded GPX support in .hikingguide (`gpx_text`, `gpx_geometry`, `gpx.geometry`, `track`)
- Local GPX attachment without requiring Google Drive
- Existing GPX preserved when a guide is re-imported

Fixed:
- Hamburger menu now opens a real navigation drawer.
- GPX parsing uses namespace-safe GPX track-point handling.
- Service worker cache version bumped to v1.3.0.

Upload all unzipped files to the GitHub Pages repository root.
