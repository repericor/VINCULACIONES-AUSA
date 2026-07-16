/* Service worker – Vinculación de Clientes C-002
   Al cambiar VERSION, todas las instalaciones se actualizan
   la próxima vez que abran la app con conexión. */
const VERSION = 'vinculacion-v3';
const ARCHIVOS = ['./','./index.html','./jspdf.umd.min.js','./fondo1.png','./fondo2.png',
                  './manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
/* Red primero (para recibir actualizaciones), caché como respaldo (offline) */
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(resp => {
      const copia = resp.clone();
      caches.open(VERSION).then(c => c.put(e.request, copia));
      return resp;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});