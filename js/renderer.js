// ========================================
// ОТРИСОВКА СТРАНИЦ (RENDERER)
// ========================================

function renderMainPage() {
    return `
        <div class="brand">
            <h1><span>MEMORY</span></h1>
            <div class="subtitle">Меню</div>
        </div>
        <div class="content">
            <div class="categories-grid">
                ${categories.map(cat => `
                    <div class="category-card" data-category="${cat.id}">
                        <div class="category-image-wrapper">
                            <img src="${cat.image}" alt="${cat.name}" class="category-image"
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22400%22 height=%22300%22 fill=%22%233A2A20%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23D4A574%22 font-size=%2236%22 font-family=%22Playfair Display%22 font-style=%22italic%22%3E${cat.name}%3C/text%3E%3C/svg%3E'">
                            <div class="category-overlay">
                                <div class="category-name">${cat.name}</div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="bottom-nav">
            <button class="nav-btn home-btn">
                <span class="icon">⌂</span> ГЛАВНАЯ
            </button>
            <button class="nav-btn categories-btn">
                <span class="icon">▦</span> КАТЕГОРИИ
            </button>
            <button class="nav-btn back-btn">
                <span class="icon">←</span> НАЗАД
            </button>
        </div>
    `;
}
// Рендер страницы категории
function renderCategoryPage(category) {
    if (!category || !category.data) {
        return `
            <div class="content">
                <div class="category-header">
                    <span class="category-icon">📋</span>
                    <div class="category-title">Категория не найдена</div>
                </div>
                <p style="color: var(--text-muted); font-size: 18px; text-align: center; padding: 40px 0;">
                    Извините, категория не найдена
                </p>
            </div>
            ${renderBottomNav()}
        `;
    }
    
    if (category.data.length === 0) {
        return `
            <div class="content">
                <div class="category-header">
                    <span class="category-icon">${category.icon || '📋'}</span>
                    <div class="category-title">${category.name}</div>
                    <span class="category-count">0</span>
                </div>
                <p style="color: var(--text-muted); font-size: 18px; text-align: center; padding: 40px 0;">
                    В этой категории пока нет блюд
                </p>
            </div>
            ${renderBottomNav()}
        `;
    }
    
    return `
        <div class="content">
            <div class="category-header">
                <span class="category-icon">${category.icon || '📋'}</span>
                <div class="category-title">${category.name}</div>
                <span class="category-count">${category.data.length}</span>
            </div>
            <div class="items-grid">
                ${category.data.map((item, index) => {
                    // Разделитель между секциями
                    if (item.isDivider) {
                        return `
                            <div class="divider-item">
                                <div class="divider-text">${item.name}</div>
                            </div>
                        `;
                    }
                    
                    // Номер позиции (01, 02, 03...)
                    const num = String(index + 1).padStart(2, '0');
                    
                    return `
                        <div class="item-card" data-index="${num}" data-category="${category.id}" data-item-id="${item.id}">
                            <img src="${item.image}" alt="${item.name}" class="item-image" 
                                 onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect width=%22300%22 height=%22200%22 fill=%22%232C1810%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23D4A574%22 font-size=%2248%22%3E%E2%9C%A6%3C/text%3E%3C/svg%3E'">
                            <div class="item-info">
                                <div class="item-name">${item.name}</div>
                                <div class="item-description">${item.description || ''}</div>
                                <div class="item-price">${item.price}</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        ${renderBottomNav()}
    `;
}

// Рендер страницы отдельного блюда
function renderItemDetailPage(item) {
    return `
        <div class="content">
            <div class="detail-page">
                <img src="${item.image}" alt="${item.name}" class="detail-image"
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22700%22 height=%22350%22%3E%3Crect width=%22700%22 height=%22350%22 fill=%22%23E8D5C4%22/%3E%3Ctext x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%2399806B%22 font-size=%2236%22 font-family=%22Inter%22%3E📷%3C/text%3E%3C/svg%3E'">
                <h2 class="detail-name">${item.name}</h2>
                <p class="detail-description">${item.description}</p>
                ${item.composition ? `<div class="detail-composition"><strong>Состав:</strong> ${item.composition}</div>` : ''}
                ${item.volume ? `<div class="detail-volume"><strong>Объём:</strong> ${item.volume}</div>` : ''}
                <div class="detail-price">${item.price}</div>
            </div>
        </div>
        ${renderBottomNav()}
    `;
}

// Рендер нижней навигации
function renderBottomNav() {
    return `
        <div class="bottom-nav">
            <button class="nav-btn home-btn">
                <span class="icon">⌂</span> ГЛАВНАЯ
            </button>
            <button class="nav-btn back-btn">
                <span class="icon">←</span> НАЗАД
            </button>
        </div>
    `;
}