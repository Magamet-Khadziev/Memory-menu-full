// ========================================
// SERVICE WORKER - ОФЛАЙН-РЕЖИМ
// ========================================

const CACHE_NAME = 'memory-v31';
const RUNTIME_CACHE = 'memory-runtime-v31';

// Основные файлы
const PRECACHE_URLS = [
    './',
    './index.html',
    './admin.html',
    './manifest.json',
    './manifest-admin.json',
    './css/style.css',
    './css/admin.css',
    './js/firebase-config.js',
    './js/storage.js',
    './js/renderer.js',
    './js/navigation.js',
    './js/app.js',
    './js/admin.js'
];

// ========================================
// УСТАНОВКА
// ========================================

self.addEventListener('install', event => {
    console.log('📦 Service Worker: установка');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Кешируем основные файлы');
                return cache.addAll(PRECACHE_URLS);
            })
            .then(() => {
                console.log('✅ Основные файлы закешированы');
                return self.skipWaiting();
            })
            .catch(err => {
                console.error('❌ Ошибка кеширования:', err);
            })
    );
});

// ========================================
// АКТИВАЦИЯ
// ========================================

self.addEventListener('activate', event => {
    console.log('🚀 Service Worker: активация');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
                        console.log('🗑 Удаляем старый кеш:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// ========================================
// ЗАПРОСЫ (Cache First)
// ========================================

self.addEventListener('fetch', event => {
    const request = event.request;
    const url = new URL(request.url);
    
    // Только GET
    if (request.method !== 'GET') return;
    
    // Пропускаем Firebase и Google APIs
    if (url.hostname.includes('firebase') || 
        url.hostname.includes('googleapis') ||
        url.hostname.includes('gstatic') ||
        url.hostname.includes('firestore')) {
        return;
    }
    
    event.respondWith(
        caches.match(request).then(cachedResponse => {
            if (cachedResponse) {
                // Возвращаем из кеша + обновляем в фоне
                fetch(request).then(response => {
                    if (response && response.status === 200) {
                        caches.open(RUNTIME_CACHE).then(cache => {
                            cache.put(request, response);
                        });
                    }
                }).catch(() => {});
                
                return cachedResponse;
            }
            
            return fetch(request).then(response => {
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }
                
                const shouldCache = 
                    request.destination === 'image' ||
                    request.destination === 'style' ||
                    request.destination === 'script' ||
                    request.destination === 'document' ||
                    url.origin === self.location.origin;
                
                if (shouldCache) {
                    const responseClone = response.clone();
                    caches.open(RUNTIME_CACHE).then(cache => {
                        cache.put(request, responseClone);
                    });
                }
                
                return response;
            }).catch(err => {
                console.log('⚠️ Офлайн:', request.url);
                
                if (request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                
                if (request.destination === 'image') {
                    return new Response(
                        '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" fill="#E8D5C4"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#99806B" font-size="24">📷</text></svg>',
                        { headers: { 'Content-Type': 'image/svg+xml' } }
                    );
                }
            });
        })
    );
});