// ========================================
// STORAGE - РАБОТА С FIREBASE FIRESTORE
// (простой способ, без модулей)
// ========================================

const CATEGORIES = ['breakfasts', 'coffee', 'teas', 'lemonades', 'cocktails', 'main', 'desserts', 'salads'];

// Кэш данных (переименован, чтобы не конфликтовать с app.js)
let _menuCache = null;

// ========================================
// ПОЛУЧИТЬ ДАННЫЕ
// ========================================

async function getMenuData() {
    // Ждём инициализации Firebase
    if (!firebaseReady) {
        await initFirebase();
    }
    
    // Кэш
    if (_menuCache && Object.keys(_menuCache).length > 0) {
        return _menuCache;
    }
    
    _menuCache = {};
    
    for (const cat of CATEGORIES) {
        try {
            const snapshot = await firebaseDB.collection(cat).get();
            _menuCache[cat] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        } catch (e) {
            console.error(`Ошибка загрузки ${cat}:`, e);
            _menuCache[cat] = [];
        }
    }
    
    return _menuCache;
}

// ========================================
// СОХРАНИТЬ БЛЮДО
// ========================================

async function saveDish(categoryId, dish, dishId = null) {
    if (!firebaseReady) await initFirebase();
    
    try {
        // Убираем id из данных
        const dishData = { ...dish };
        delete dishData.id;
        
        if (dishId) {
            // Обновление
            await firebaseDB.collection(categoryId).doc(dishId).update(dishData);
            console.log('✏️ Обновлено:', dish.name);
        } else {
            // Добавление
            await firebaseDB.collection(categoryId).add(dishData);
            console.log('➕ Добавлено:', dish.name);
        }
        
        _menuCache = null; // Сбрасываем кэш
        return true;
    } catch (e) {
        console.error('Ошибка сохранения:', e);
        return false;
    }
}

// ========================================
// УДАЛИТЬ БЛЮДО
// ========================================

async function deleteDish(categoryId, dishId) {
    if (!firebaseReady) await initFirebase();
    
    try {
        await firebaseDB.collection(categoryId).doc(dishId).delete();
        console.log('🗑 Удалено:', dishId);
        _menuCache = null;
        return true;
    } catch (e) {
        console.error('Ошибка удаления:', e);
        return false;
    }
}

// ========================================
// СЛУШАТЕЛЬ РЕАЛЬНОГО ВРЕМЕНИ
// ========================================

function subscribeToChanges(callback) {
    if (!firebaseReady) {
        initFirebase().then(() => subscribeToChanges(callback));
        return;
    }
    
    CATEGORIES.forEach(cat => {
        firebaseDB.collection(cat).onSnapshot((snapshot) => {
            if (!_menuCache) _menuCache = {};
            
            _menuCache[cat] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            console.log(`🔄 Обновление: ${cat}`);
            callback();
        }, (error) => {
            console.error(`Ошибка подписки на ${cat}:`, error);
        });
    });
}