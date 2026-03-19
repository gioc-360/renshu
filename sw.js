// Service Worker for Renshu PWA
const CACHE_NAME = 'renshu-v3';
const ASSETS = [
  './',
  './index.html',
  './src/data/n5-content.js',
  './src/data/hiragana-groups.js',
  './src/data/katakana-groups.js',
  './src/fsrs.js',
  'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700&display=swap',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      // Network-first for HTML (get updates), cache-first for assets
      if (event.request.mode === 'navigate') {
        return fetch(event.request).catch(() => cached);
      }
      return cached || fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      });
    })
  );
});
