TrailGuide v1.4.0 — Customer Publishing
=========================================

This build keeps the merged v1.1 + v1.2 feature set and adds customer publishing.

New: Kundenversion veröffentlichen
----------------------------------
In Mehr -> Kundenversion veröffentlichen you can:
- enter a customer name
- select one, several, or all hiking destinations
- select one, several, or all trips
- create a complete customer-specific TrailGuide ZIP

The generated customer ZIP contains:
- the complete TrailGuide web app
- selected destinations and hikes
- all stored GPX geometry
- selected trips and destination links
- maps, route details, search, trip planning, import/export, etc.

The customer does NOT need to import anything. The data is preloaded on first launch.

Recommended publishing
-----------------------
Upload the contents of the generated customer ZIP into:
customers/<customer-slug>/

Then give the customer this URL:
https://<your-github-pages-domain>/customers/<customer-slug>/

Isolation
---------
Each customer build uses a separate browser storage prefix, so it does not mix with your own TrailGuide data.
If the customer uses Cloud or Google Drive, they authenticate with their own Google account.

Version: 1.4.0
