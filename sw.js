const CACHE="trailguide-v1.3.0";const ASSETS=["./","./index.html","./styles.css","./config.js","./app.js","./drive.js","./cloud-auth.js","./manifest.webmanifest","./privacy.html"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS.filter(x=>!x.endsWith("cloud-auth.js"))))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));