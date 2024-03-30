self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
    );
  });

  
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('my-cache-name')
        .then(cache => {
          return cache.addAll([
            '/',
            '/index.html',
            '/CSS/Easteregg.css',
            '/CSS/fullscreen.css',
            '/CSS/normalize.css',
            '/CSS/styles.css',
            '/Javascript/addEventListener.js',
            '/Javascript/mailloader.js',
            '/Javascript/mailloader2.js'
          ]);
        })
    );
  });

  