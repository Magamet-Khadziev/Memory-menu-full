// ========================================
// АДМИН-ПАНЕЛЬ - ЛОГИКА
// (с загрузкой фото через Base64)
// ========================================

const adminCategories = [
    { id: 'breakfasts', name: 'Завтраки', icon: '🍳' },
    { id: 'coffee', name: 'Кофе', icon: '☕' },
    { id: 'teas', name: 'Чай', icon: '🍵' },
    { id: 'lemonades', name: 'Лимонады', icon: '🍋' },
    { id: 'cocktails', name: 'Коктейли', icon: '🍹' },
    { id: 'main', name: 'Основное меню', icon: '🍽️' },
    { id: 'desserts', name: 'Десерты', icon: '🍰' },
    { id: 'salads', name: 'Салаты', icon: '🥗' }
];

let currentCategory = null;
let cachedData = null;

// ========================================
// ИНИЦИАЛИЗАЦИЯ
// ========================================

document.addEventListener('DOMContentLoaded', async function() {
    console.log('🔧 Админ-панель MEMORY запущена!');
    
    try {
        await initFirebase();
        await loadData();
        setupEventListeners();
    } catch (e) {
        console.error('❌ Ошибка инициализации:', e);
    }
});

// ========================================
// ЗАГРУЗКА ДАННЫХ
// ========================================

async function loadData() {
    cachedData = await getMenuData();
    renderCategories();
}

async function renderCategories() {
    const container = document.getElementById('categories-list');
    if (!container) return;
    
    if (!cachedData) cachedData = await getMenuData();
    
    container.innerHTML = adminCategories.map(cat => {
        const count = cachedData[cat.id] ? cachedData[cat.id].length : 0;
        return `
            <div class="category-item" data-category="${cat.id}">
                <span class="cat-icon">${cat.icon}</span>
                <span class="cat-name">${cat.name}</span>
                <span class="cat-count">${count}</span>
            </div>
        `;
    }).join('');
    
    container.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function() {
            selectCategory(this.dataset.category);
        });
    });
}

async function selectCategory(categoryId) {
    currentCategory = categoryId;
    
    document.querySelectorAll('.category-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === categoryId);
    });
    
    const cat = adminCategories.find(c => c.id === categoryId);
    document.getElementById('current-category-title').textContent = cat.icon + ' ' + cat.name;
    document.getElementById('btn-add-dish').style.display = 'inline-flex';
    
    await renderDishes(categoryId);
}

async function renderDishes(categoryId) {
    const container = document.getElementById('dishes-list');
    if (!container) return;
    
    cachedData = await getMenuData();
    const dishes = cachedData[categoryId] || [];
    
    if (dishes.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                В этой категории пока нет позиций.<br>
                Нажмите "Добавить позицию", чтобы создать первую.
            </div>
        `;
        return;
    }
    
    container.innerHTML = dishes.map(dish => `
        <div class="dish-admin-card">
            <img src="${dish.image || ''}" alt="${dish.name}" class="dish-admin-img"
                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22%3E%3Crect width=%2280%22 height=%2280%22 fill=%22%23EDE4D8%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%238B7B6E%22 font-size=%2224%22%3E📷%3C/text%3E%3C/svg%3E'">
            <div class="dish-admin-info">
                <div class="dish-admin-name">${dish.name}</div>
                <div class="dish-admin-desc">${dish.description || '—'}</div>
                <div class="dish-admin-price">${dish.price}</div>
            </div>
            <div class="dish-admin-actions">
                <button class="btn-icon btn-edit" onclick="editDish('${dish.id}')">✏️</button>
                <button class="btn-icon btn-delete" onclick="confirmDelete('${dish.id}')">🗑️</button>
            </div>
        </div>
    `).join('');
}

// ========================================
// НАСТРОЙКА ОБРАБОТЧИКОВ
// ========================================

function setupEventListeners() {
    const btnAdd = document.getElementById('btn-add-dish');
    if (btnAdd) btnAdd.addEventListener('click', () => openModal('add'));
    
    const btnClose = document.getElementById('btn-close-modal');
    if (btnClose) btnClose.addEventListener('click', closeModal);
    
    const btnCancel = document.getElementById('btn-cancel');
    if (btnCancel) btnCancel.addEventListener('click', closeModal);
    
    const modal = document.getElementById('modal');
    if (modal) modal.addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    const form = document.getElementById('dish-form');
    if (form) form.addEventListener('submit', async function(e) {
        e.preventDefault();
        await saveCurrentDish();
    });
    
    // ===== ЗАГРУЗКА ФОТО (base64) =====
    const btnPickImage = document.getElementById('btn-pick-image');
    if (btnPickImage) {
        btnPickImage.addEventListener('click', function() {
            document.getElementById('dish-image-file').click();
        });
    }
    
    const fileInput = document.getElementById('dish-image-file');
    if (fileInput) {
        fileInput.addEventListener('change', async function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            if (file.size > 10 * 1024 * 1024) {
                alert('❌ Файл слишком большой (макс 10 МБ)');
                this.value = '';
                return;
            }
            
            const statusEl = document.getElementById('upload-status');
            const preview = document.getElementById('image-preview');
            const previewImg = document.getElementById('image-preview-img');
            const clearBtn = document.getElementById('btn-clear-image');
            
            try {
                if (statusEl) statusEl.textContent = 'Сжатие...';
                
                // Сжимаем фото до 500 КБ, макс ширина 1200px
                const base64 = await compressImage(file, 500, 1200);
                
                previewImg.src = base64;
                preview.style.display = 'block';
                clearBtn.style.display = 'inline-flex';
                
                document.getElementById('dish-image').value = base64;
                
                const sizeKB = Math.round((base64.length - 'data:image/jpeg;base64,'.length) * 3 / 4 / 1024);
                if (statusEl) statusEl.textContent = `✅ ${sizeKB} КБ`;
                
            } catch (error) {
                console.error(error);
                alert('❌ Ошибка обработки фото');
                if (statusEl) statusEl.textContent = '❌ Ошибка';
            }
        });
    }
    
    const btnClearImage = document.getElementById('btn-clear-image');
    if (btnClearImage) {
        btnClearImage.addEventListener('click', function() {
            document.getElementById('dish-image-file').value = '';
            document.getElementById('dish-image').value = '';
            document.getElementById('image-preview').style.display = 'none';
            const statusEl = document.getElementById('upload-status');
            if (statusEl) statusEl.textContent = '';
            this.style.display = 'none';
        });
    }
    
    // Экспорт
    const btnExport = document.getElementById('btn-export');
    if (btnExport) btnExport.addEventListener('click', exportData);
    
    // Импорт
    const btnImport = document.getElementById('btn-import');
    if (btnImport) btnImport.addEventListener('click', () => {
        document.getElementById('import-file').click();
    });
    
    const importFile = document.getElementById('import-file');
    if (importFile) importFile.addEventListener('change', importData);
}

// ========================================
// МОДАЛЬНОЕ ОКНО
// ========================================

function openModal(mode, dish = null) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const form = document.getElementById('dish-form');
    const preview = document.getElementById('image-preview');
    const previewImg = document.getElementById('image-preview-img');
    const clearBtn = document.getElementById('btn-clear-image');
    const statusEl = document.getElementById('upload-status');
    
    if (mode === 'add') {
        title.textContent = 'Добавить позицию';
        form.reset();
        document.getElementById('dish-id').value = '';
        document.getElementById('dish-image').value = '';
        preview.style.display = 'none';
        clearBtn.style.display = 'none';
        if (statusEl) statusEl.textContent = '';
    } else {
        title.textContent = 'Редактировать позицию';
        document.getElementById('dish-id').value = dish.id;
        document.getElementById('dish-name').value = dish.name || '';
        document.getElementById('dish-description').value = dish.description || '';
        document.getElementById('dish-composition').value = dish.composition || '';
        document.getElementById('dish-volume').value = dish.volume || '';
        document.getElementById('dish-price').value = dish.price || '';
        document.getElementById('dish-image').value = dish.image || '';
        
        if (dish.image) {
            previewImg.src = dish.image;
            preview.style.display = 'block';
            clearBtn.style.display = 'inline-flex';
            if (statusEl) statusEl.textContent = '';
        } else {
            preview.style.display = 'none';
            clearBtn.style.display = 'none';
        }
    }
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// ========================================
// СОХРАНЕНИЕ
// ========================================

async function saveCurrentDish() {
    const dishId = document.getElementById('dish-id').value;
    const dishData = {
        name: document.getElementById('dish-name').value.trim(),
        description: document.getElementById('dish-description').value.trim(),
        composition: document.getElementById('dish-composition').value.trim(),
        volume: document.getElementById('dish-volume').value.trim(),
        price: document.getElementById('dish-price').value.trim(),
        image: document.getElementById('dish-image').value.trim()
    };
    
    if (!dishData.name || !dishData.price) {
        alert('Заполните обязательные поля: Название и Цена');
        return;
    }
    
    await saveDish(currentCategory, dishData, dishId || null);
    
    closeModal();
    await renderDishes(currentCategory);
    await renderCategories();
}

// ========================================
// РЕДАКТИРОВАНИЕ И УДАЛЕНИЕ
// ========================================

async function editDish(dishId) {
    if (!cachedData) cachedData = await getMenuData();
    const dish = cachedData[currentCategory].find(d => d.id === dishId);
    if (dish) openModal('edit', dish);
}

async function confirmDelete(dishId) {
    if (!cachedData) cachedData = await getMenuData();
    const dish = cachedData[currentCategory].find(d => d.id === dishId);
    if (!dish) return;
    
    if (confirm(`Удалить "${dish.name}"?`)) {
        await deleteDish(currentCategory, dishId);
        await renderDishes(currentCategory);
        await renderCategories();
    }
}

// ========================================
// ЭКСПОРТ / ИМПОРТ
// ========================================

async function exportData() {
    const data = await getMenuData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'memory-menu-backup-' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
}

async function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = async function(event) {
        try {
            const data = JSON.parse(event.target.result);
            
            if (!confirm('Импортировать данные? Текущее меню будет заменено.')) return;
            
            if (!firebaseReady) await initFirebase();
            
            for (const cat of CATEGORIES) {
                if (data[cat] && Array.isArray(data[cat])) {
                    for (const dish of data[cat]) {
                        const dishData = { ...dish };
                        delete dishData.id;
                        await firebaseDB.collection(cat).add(dishData);
                    }
                }
            }
            
            alert('✅ Данные импортированы!');
            cachedData = null;
            await loadData();
            
            if (currentCategory) await renderDishes(currentCategory);
        } catch (err) {
            console.error(err);
            alert('❌ Ошибка импорта');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

// ========================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ
// ========================================

window.editDish = editDish;
window.confirmDelete = confirmDelete;