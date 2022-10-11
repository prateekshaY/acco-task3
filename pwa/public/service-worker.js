let CACHE_NAME = 'pwa';
const urlsToCache = [
  "/static/js/bundle.js",
  "index.html",
  '/',
  '/users',
  '/posts'
];


/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  // eslint-disable-next-line no-restricted-globals
  self.skipWaiting();
});



/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    }),
  );
});


// Update a service worker
 /* eslint-disable-next-line no-restricted-globals */
 self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

