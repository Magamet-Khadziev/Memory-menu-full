const CACHE_NAME = 'memory-v1789160977';

const urls = [
    'index.html',
    'css/style.css',
    'js/app.js',
    'js/renderer.js',
    'js/navigation.js',
    'js/data/breakfasts.js',
    'js/data/coffee.js',
    'js/data/teas.js',
    'js/data/lemonades.js',
    'js/data/cocktails.js',
    'js/data/main.js',
    'js/data/desserts.js',
     'js/data/salads.js',
    'manifest.json'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('✅ Кеш обновлён!');
                return cache.addAll(urls);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => response || fetch(e.request))
    );
});