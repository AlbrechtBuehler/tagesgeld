// Hält die App auf dem Handy, damit sie auch ohne Netz startet.
// Bei jeder neuen Fassung FASSUNG hochzählen, sonst bleibt die alte im Speicher.
const FASSUNG = 'tagesgeld-4';
const DATEIEN = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(FASSUNG).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== FASSUNG).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Zuerst das Netz (neue Fassung kommt sofort), ohne Netz der Speicher.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => {
      const kopie = r.clone();
      caches.open(FASSUNG).then(c => c.put(e.request, kopie));
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
