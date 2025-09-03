// Service Worker dla lepszego zarządzania cache - SSL PROTOCOL ERROR fix
const CACHE_NAME = 'osteopatia-paduszynski-v1.4-ssl-protocol-fix';
const STATIC_CACHE_TIME = 24 * 60 * 60 * 1000; // 24 godziny w milisekundach

// Pliki do cache'owania
const STATIC_ASSETS = [
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/logo_ico.ico'
];

// Instalacja SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Aktywacja SW
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Strategia cache dla różnych typów zasobów z SSL error handling
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Tylko dla naszej domeny i HTTPS
  if (url.origin !== location.origin) return;
  
  // Skip service worker for HTTP requests to avoid SSL protocol conflicts
  if (url.protocol === 'http:') {
    return;
  }

  // Skip service worker dla zasobów zewnętrznych które mogą powodować SSL conflicts
  if (url.hostname !== location.hostname) {
    return;
  }

  // Strategia dla różnych typów zasobów
  if (request.destination === 'document') {
    // HTML - zawsze sprawdź sieć, fallback do cache
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Sklonuj odpowiedź przed cache'owaniem
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(request))
    );
  } else if (request.destination === 'image' || 
             request.destination === 'style' || 
             request.destination === 'script' ||
             url.pathname.startsWith('/assets/')) {
    // Statyczne zasoby - cache first
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Sprawdź wiek cache
            const cachedDate = cachedResponse.headers.get('date');
            if (cachedDate) {
              const ageInMs = Date.now() - new Date(cachedDate).getTime();
              if (ageInMs < STATIC_CACHE_TIME) {
                return cachedResponse;
              }
            }
          }
          
          // Pobierz z sieci z SSL error handling i zapisz do cache
          return fetch(request, {
            // Dodaj headers które mogą pomóc z SSL handshake
            headers: {
              'Cache-Control': 'no-cache'
            }
          })
            .then((response) => {
              if (response.status === 200 && response.ok) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, responseClone);
                });
              }
              return response;
            })
            .catch((error) => {
              // Log SSL errors for debugging
              if (error.message && error.message.includes('SSL')) {
                console.warn('SSL error in Service Worker:', error);
              }
              return cachedResponse || new Response('Offline', { 
                status: 503, 
                statusText: 'Service Unavailable' 
              });
            });
        })
    );
  }
});

// Wiadomości od strony głównej
self.addEventListener('message', (event) => {
  if (event.data === 'CLEAR_CACHE') {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    });
    event.ports[0].postMessage('CACHE_CLEARED');
  }
});