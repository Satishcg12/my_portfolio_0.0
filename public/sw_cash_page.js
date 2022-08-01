const cashName = 'sw_cash';

const cashAssets = [
    '/',
]

//call install event
self.addEventListener('install', event => {
    console.log('Service Worker: Installed');
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
    console.log('Service Worker: Activated');
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
    console.log('Service Worker: Fetching');
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Service Worker: Found In Cache');
                return response;
            }
            console.log('Service Worker: Fetching Requested File');
            return fetch(event.request).then((response) => {
                return caches.open(cashName).then((cache) => {
                    console.log('Service Worker: Caching File');
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        }
        )
    );
}
);