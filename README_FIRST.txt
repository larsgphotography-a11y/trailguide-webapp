TrailGuide v1.5.0 — Link Sharing
=================================

This version replaces the customer ZIP workflow with direct customer links.

How it works
------------
1. Sign into TrailGuide Cloud with your Google account.
2. Open "Mehr" -> "Freigabelink erstellen".
3. Select one, several, or all prepared hiking destinations.
4. Optionally select trips.
5. Create the link.
6. Send only that URL to the customer.

The customer:
- installs nothing
- imports nothing
- needs no TrailGuide account
- opens the normal TrailGuide web app
- immediately sees the prepared destinations, hikes and GPX geometry
- can use the normal app UI and local functionality

The shared link is a bearer link. Anyone who receives the URL can open that shared snapshot.

IMPORTANT — Firestore rules
---------------------------
This feature needs the included firestore.rules to be deployed to the Firebase project.
The relevant collection is:

trailguideShares/{shareId}

Rules allow:
- public read for anyone who has the random share ID
- create/update/delete only by the authenticated owner

GitHub Pages
------------
Upload all files from this ZIP to the root of the existing TrailGuide GitHub Pages repository.
Keep the same public TrailGuide URL. Shared links look like:

https://<your-site>/trailguide-webapp/?share=<random-id>

Version: 1.5.0
