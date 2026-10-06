TrailGuide v1.5.1 — Share Link Fix + Map Visibility Toggle
==========================================================

Fixes
-----
1. Share-link Firestore error fixed.
   Firestore does not support nested arrays, while GPX geometry is naturally stored as:
   [[lat,lng],[lat,lng],...]

   v1.5.1 stores the shared TrailGuide snapshot as a JSON string (`dataJson`)
   in Firestore. The customer link converts it back to normal TrailGuide data
   when opened.

2. New per-route map visibility toggle.
   On each route detail page you now have:
   "Route auf Karten anzeigen" ON/OFF

   OFF hides that route / GPX from:
   - the route map
   - the destination map
   - the global TrailGuide map

   The setting is stored with the route and is included in shared snapshots.

Sharing workflow
----------------
Mehr -> Freigabelink erstellen -> select destinations/trips -> create link.

The customer only receives a URL and does not install or import anything.

Firestore
---------
The same `trailguideShares/{shareId}` rules from v1.5 are used.
Shared snapshots are stored in the `dataJson` string field.

Version 1.5.1
