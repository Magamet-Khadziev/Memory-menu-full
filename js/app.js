// ========================================
// ОСНОВНОЙ ФАЙЛ ПРИЛОЖЕНИЯ
// (простой способ, без модулей)
// ========================================

// Данные меню
let menuData = {};

// Список всех категорий
const categories = [
    { id: 'breakfasts', name: 'ЗАВТРАКИ', icon: '🍳', data: [], image: 'images/categories/breakfasts.jpg' },
    { id: 'coffee', name: 'КОФЕ', icon: '☕', data: [], image: 'images/categories/coffee.jpg' },
    { id: 'teas', name: 'ЧАЙ', icon: '🍵', data: [], image: 'images/categories/teas.jpg' },
    { id: 'lemonades', name: 'ЛИМОНАДЫ', icon: '🍋', data: [], image: 'images/categories/lemonades.jpg' },
    { id: 'cocktails', name: 'КОКТЕЙЛИ', icon: '🍹', data: [], image: 'images/categories/cocktails.jpg' },
    { id: 'main', name: 'ОСНОВНОЕ МЕНЮ', icon: '🍽️', data: [], image: 'images/categories/main.jpg' },
    { id: 'desserts', name: 'ДЕСЕРТЫ', icon: '🍰', data: [], image: 'images/categories/desserts.jpg' },
    { id: 'salads', name: 'САЛАТЫ', icon: '🥗', data: [], image: 'images/categories/salads.jpg' }
];

// История навигации
let navigationHistory = [];
let currentCategoryId = null;

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 Кафе MEMORY запущено!');
    
    try {
        // Инициализируем Firebase
        await initFirebase();
        
        // Загружаем данные
        await loadData();
        
        // Показываем главную
        showMainPage();
        
        // Подписываемся на изменения
        subscribeToChanges(async () => {
            console.log('🔄 Данные обновились!');
            await loadData();
            
            // Если мы на странице категории — обновляем
            if (currentCategoryId && navigationHistory[navigationHistory.length - 1] === 'category') {
                const category = categories.find(c => c.id === currentCategoryId);
                if (category) {
                    const app = document.getElementById('app');
                    app.innerHTML = renderCategoryPage(category);
                    setupCategoryHandlers();
                    setupNavButtons();
                }
            }
        });
        
    } catch (e) {
        console.error('❌ Ошибка инициализации:', e);
    }
});

// Загрузка данных
async function loadData() {
    try {
        menuData = await getMenuData();
        
        categories.forEach(cat => {
            cat.data = menuData[cat.id] || [];
        });
        
        console.log('✅ Данные загружены:', categories.map(c => `${c.name}: ${c.data.length}`).join(', '));
    } catch (e) {
        console.error('❌ Ошибка загрузки:', e);
    }
}

// ========================================
// НАВИГАЦИЯ
// ========================================
function showMainPage() {
    navigationHistory = [];
    currentCategoryId = null;
    
    const app = document.getElementById('app');
    if (!app) return;
    
    app.className = 'page-with-bg';  // ← ЭТА СТРОКА ДОЛЖНА БЫТЬ
    
    app.innerHTML = renderMainPage();
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryId = this.dataset.category;
            if (categoryId) showCategoryPage(categoryId);
        });
    });
}

function showCategoryPage(categoryId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const app = document.getElementById('app');
    if (!app) return;
    
    app.className = 'page-without-bg';
    currentCategoryId = categoryId;
    
    if (navigationHistory.length === 0 || navigationHistory[navigationHistory.length - 1] !== 'category') {
        navigationHistory.push('category');
    }
    
    app.innerHTML = renderCategoryPage(category);
    setupCategoryHandlers();
    setupNavButtons();
}

function setupCategoryHandlers() {
    document.querySelectorAll('.item-card').forEach(card => {
        card.addEventListener('click', function() {
            const itemId = this.dataset.itemId;
            const catId = this.dataset.category;
            if (itemId && catId) showItemDetailPage(catId, itemId);
        });
    });
}

function showItemDetailPage(categoryId, itemId) {
    const category = categories.find(c => c.id === categoryId);
    if (!category) return;
    
    const item = category.data.find(i => i.id === itemId);
    if (!item) return;
    
    const app = document.getElementById('app');
    if (!app) return;
    
    app.className = 'page-without-bg';
    currentCategoryId = categoryId;
    navigationHistory.push('detail');
    
    app.innerHTML = renderItemDetailPage(item);
    setupNavButtons();
}

function setupNavButtons() {
    const backBtn = document.querySelector('.nav-btn.back-btn');
    if (backBtn) backBtn.addEventListener('click', goBack);
    
    const homeBtn = document.querySelector('.nav-btn.home-btn');
    if (homeBtn) homeBtn.addEventListener('click', showMainPage);
    
    const categoriesBtn = document.querySelector('.nav-btn.categories-btn');
    if (categoriesBtn) categoriesBtn.addEventListener('click', showMainPage);
}

function goBack() {
    if (navigationHistory.length === 0) {
        showMainPage();
        return;
    }
    
    const lastPage = navigationHistory.pop();
    
    if (lastPage === 'detail') {
        if (currentCategoryId) {
            showCategoryPage(currentCategoryId);
        } else {
            showMainPage();
        }
        return;
    }
    
    if (lastPage === 'category') {
        showMainPage();
        return;
    }
    
    showMainPage();
}

window.addEventListener('popstate', goBack);