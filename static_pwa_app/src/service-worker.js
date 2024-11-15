const pwaApp = "pwa-app-v1";
const assets = [
  "./index.html",
  "./src/index.css",
  "./src/app.js",
  "./src/install.js",
  "./src/assets/icon-192x192.png",
  "./src/assets/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(pwaApp).then((cache) => cache.addAll(assets)));
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
