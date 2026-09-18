// ========================================
// FIREBASE КОНФИГУРАЦИЯ + ОФЛАЙН-РЕЖИМ
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSyCUwLfbzIwv8bCmv7iWItcptACX5y8s9G8",
    authDomain: "memory-cafe-4c1d0.firebaseapp.com",
    projectId: "memory-cafe-4c1d0",
    storageBucket: "memory-cafe-4c1d0.firebasestorage.app",
    messagingSenderId: "338710680478",
    appId: "1:338710680478:web:24ba731f3aa21288abbc8f"
};

let firebaseApp = null;
let firebaseDB = null;
let firebaseReady = false;

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

function initFirebase() {
    return new Promise((resolve, reject) => {
        const checkInterval = setInterval(() => {
            if (typeof firebase !== 'undefined') {
                clearInterval(checkInterval);
                
                try {
                    firebaseApp = firebase.initializeApp(firebaseConfig);
                    firebaseDB = firebase.firestore();
                    
                    // ⚡ ВКЛЮЧАЕМ ОФЛАЙН-РЕЖИМ FIREBASE
                    firebaseDB.enablePersistence({ synchronizeTabs: true })
                        .then(() => {
                            console.log('✅ Firebase офлайн-режим включён');
                        })
                        .catch(err => {
                            if (err.code === 'failed-precondition') {
                                console.warn('⚠️ Офлайн-режим: несколько вкладок открыто');
                            } else if (err.code === 'unimplemented') {
                                console.warn('⚠️ Офлайн-режим не поддерживается');
                            } else {
                                console.warn('⚠️ Офлайн-режим:', err);
                            }
                        });
                    
                    firebaseReady = true;
                    console.log('✅ Firebase инициализирован');
                    resolve(firebaseDB);
                } catch (e) {
                    console.error('❌ Ошибка инициализации:', e);
                    reject(e);
                }
            }
        }, 100);
        
        setTimeout(() => {
            clearInterval(checkInterval);
            if (!firebaseReady) {
                reject(new Error('Firebase не загрузился за 10 секунд'));
            }
        }, 10000);
    });
}

// ========================================
// СЖАТИЕ ФОТО (для админки)
// ========================================

function compressImage(file, maxSize = 500, maxWidth = 1200) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            
            img.onload = function() {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                if (width > maxWidth) {
                    height = (maxWidth / width) * height;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                let quality = 0.9;
                let dataUrl = canvas.toDataURL('image/jpeg', quality);
                
                let currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                console.log(`📊 Начальный размер: ${currentSize} КБ`);
                
                while (currentSize > maxSize && quality > 0.3) {
                    quality -= 0.1;
                    dataUrl = canvas.toDataURL('image/jpeg', quality);
                    currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                }
                
                if (currentSize > maxSize) {
                    const scale = Math.sqrt(maxSize / currentSize);
                    const newWidth = Math.round(width * scale);
                    const newHeight = Math.round(height * scale);
                    
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    
                    dataUrl = canvas.toDataURL('image/jpeg', 0.85);
                    currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                }
                
                console.log(`✅ Финальный размер: ${currentSize} КБ`);
                resolve(dataUrl);
            };
            
            img.onerror = () => reject(new Error('Ошибка загрузки изображения'));
            img.src = e.target.result;
        };
        
        reader.onerror = () => reject(new Error('Ошибка чтения файла'));
        reader.readAsDataURL(file);
    });
}