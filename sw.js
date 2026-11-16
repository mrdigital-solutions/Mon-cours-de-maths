/* Service Worker de l'application « Mes cours de 1re » :
   - Pré-cache les fichiers du site pour fonctionner hors-ligne sur téléphone.
   - Stratégie Network-first sur nos fichiers afin de récupérer immédiatement les mises à jour. */
const CACHE_NAME = 'cours-1re-v3';
const CORE_ASSETS = [
  './',
  './index.html',
  './cours.js',
  './exercices.js',
  './physique-cours.js',
  './physique-exercices.js',
  './reconnaitre.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './pwa-192x192.svg',
  './pwa-512x512.svg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  /* Les appels à l'API Anthropic et au SDK ESM restent toujours en direct réseau. */
  if (url.hostname === 'api.anthropic.com' || url.hostname === 'cdn.jsdelivr.net') return;

  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true })
          .then((cached) => cached || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
    );
    return;
  }

  /* Ressources externes statiques (MathJax, polices, pdf.js) : cache-first avec mise à jour réseau. */
  if (url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        if (res && (res.status === 200 || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      }))
    );
  }
});
