// Service Worker dla lepszego zarządzania cache z poprawkami SSL dla mobile
const CACHE_NAME = 'osteopatia-paduszynski-v1.3-ssl-mobile-fix';
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

// Strategia cache dla różnych typów zasobów
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Tylko dla naszej domeny i HTTPS
  if (url.origin !== location.origin) return;
  
  // Sprawdzaj protokół bez wymuszania przekierowań które mogą powodować SSL errors na mobile
  if (url.protocol === 'http:' && location.protocol === 'https:') {
    // Skip service worker for mixed content to avoid SSL protocol errors
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
          
          // Pobierz z sieci i zapisz do cache
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                  cache.put(request, responseClone);
                });
              }
              return response;
            })
            .catch(() => cachedResponse); // Fallback do starego cache
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