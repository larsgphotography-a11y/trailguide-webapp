TrailGuide v1.0.0

FIRST WORKING VERSION
- Mobile-first PWA
- Country -> Region -> Destination -> Hikes
- Trips with linked hiking destinations
- Import .hikingguide / .travelplan / ZIP
- GPX upload/back-up to Google Drive from a destination or route
- Travel document upload to Google Drive
- Full library export to JSON
- Firebase Google sign-in and realtime Firestore sync
- Separate Firestore namespace: trailguideUsers
- Separate Drive root: TrailGuide
- Interactive Leaflet / OpenStreetMap maps
- Lenzerheide October starter content

IMPORTANT
This build intentionally reuses the Firebase project and Google OAuth client ID already used by the Travel & Photography Guide. You still need to authorize the NEW GitHub Pages origin in Google Cloud and publish the included combined Firestore rules.
