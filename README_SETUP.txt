TRAILGUIDE v1.0.0 — CONNECTION SETUP

1. GitHub Pages
Create a new repository (recommended name: trailguide-webapp), upload the CONTENTS of this ZIP to the repository root, then enable GitHub Pages from the main branch / root.

2. Firebase Authentication
The app reuses Firebase project photoguidelarsg. Google sign-in must already be enabled. In Firebase Authentication -> Settings -> Authorized domains, add the new GitHub Pages host (for example larsgphotography-a11y.github.io). If using a custom subdomain later, add that too.

3. Firestore
Publish the included firestore.rules. They preserve the existing /users and /sharedCollections rules and add /trailguideUsers for this app.

4. Google Drive OAuth
The app reuses OAuth client 644183767907-ou6b8sf07mr5gt0bggnaqcii7hprcjob.apps.googleusercontent.com.
In Google Cloud Console -> APIs & Services -> Credentials -> that Web client -> Authorized JavaScript origins, add the exact TrailGuide site origin, e.g. https://larsgphotography-a11y.github.io . If you later use a custom domain, add that origin too.

5. Test
Open the deployed app in Chrome. More -> Sign in with Google. Then More -> Connect Google Drive. A top-level TrailGuide folder should be created in Drive.
