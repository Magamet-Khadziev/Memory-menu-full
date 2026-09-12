// ========================================
// FIREBASE КОНФИГУРАЦИЯ
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
                        .catch((err) => {
                            if (err.code === 'failed-precondition') {
                                console.warn('⚠️ Офлайн-режим: несколько вкладок открыто');
                            } else if (err.code === 'unimplemented') {
                                console.warn('⚠️ Офлайн-режим не поддерживается браузером');
                            }
                        });
                    
                    firebaseReady = true;
                    console.log('✅ Firebase инициализирован');
                    resolve(firebaseDB);
                } catch (e) {
                    console.error('❌ Ошибка инициализации Firebase:', e);
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
// СЖАТИЕ ФОТО
// ========================================

/**
 * Сжимает фото до указанного размера и возвращает base64
 * @param {File} file - файл изображения
 * @param {number} maxSize - максимальный размер в KB (по умолчанию 500)
 * @param {number} maxWidth - максимальная ширина (по умолчанию 1200px)
 * @returns {Promise<string>} - base64 строка
 */
function compressImage(file, maxSize = 500, maxWidth = 1200) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            
            img.onload = function() {
                // Создаём canvas
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Уменьшаем размер если нужно
                if (width > maxWidth) {
                    height = (maxWidth / width) * height;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                
                // Начинаем с качества 0.9 и уменьшаем
                let quality = 0.9;
                let dataUrl = canvas.toDataURL('image/jpeg', quality);
                
                // Проверяем размер
                let currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                
                console.log(`📊 Начальный размер: ${currentSize} КБ`);
                
                // Уменьшаем качество пока размер > maxSize
                while (currentSize > maxSize && quality > 0.3) {
                    quality -= 0.1;
                    dataUrl = canvas.toDataURL('image/jpeg', quality);
                    currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                    console.log(`📉 Уменьшаем до качества ${quality.toFixed(1)}: ${currentSize} КБ`);
                }
                
                // Если всё ещё большое — уменьшаем разрешение
                if (currentSize > maxSize) {
                    const scale = Math.sqrt(maxSize / currentSize);
                    const newWidth = Math.round(width * scale);
                    const newHeight = Math.round(height * scale);
                    
                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);
                    
                    dataUrl = canvas.toDataURL('image/jpeg', 0.85);
                    currentSize = Math.round((dataUrl.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                    console.log(`📉 Уменьшаем разрешение до ${newWidth}x${newHeight}: ${currentSize} КБ`);
                }
                
                console.log(`✅ Финальный размер: ${currentSize} КБ`);
                resolve(dataUrl);
            };
            
            img.onerror = function() {
                reject(new Error('Ошибка загрузки изображения'));
            };
            
            img.src = e.target.result;
        };
        
        reader.onerror = function() {
            reject(new Error('Ошибка чтения файла'));
        };
        
        reader.readAsDataURL(file);
    });
}