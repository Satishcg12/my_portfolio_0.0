const cashName = 'sw_cash';

const cashAssets = [
    '/',
    '/about',
    '/contact',
    '/education',
    '/achivements',
    '/projects',
    

]

//call install event
self.addEventListener('install', event => {
        event.waitUntil(
        caches.open(cashName).then(function(cache) {
            console.log('Service Worker: Caching Files');
            return cache.addAll(cashAssets);
        }
        )
    );
});
//call activate event
self.addEventListener('activate', event => {
    //remove old cache
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== cashName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }));
});

//call fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        }
        )
    );
}
);

