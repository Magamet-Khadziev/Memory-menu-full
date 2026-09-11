// ========================================
// АВТОРИЗАЦИЯ В АДМИНКЕ
// ========================================

const ADMIN_PASSWORD = '1111'; // ← ИЗМЕНИТЕ НА СВОЙ ПАРОЛЬ

function checkAuth() {
    const isAuth = sessionStorage.getItem('memory_admin_auth');
    
    if (isAuth === 'true') {
        return true;
    }
    
    const password = prompt('Введите пароль администратора:');
    
    if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('memory_admin_auth', 'true');
        return true;
    } else {
        alert('❌ Неверный пароль');
        window.location.href = 'index.html';
        return false;
    }
}

// Проверяем при загрузке
if (!checkAuth()) {
    // Останавливаем загрузку
    document.addEventListener('DOMContentLoaded', function(e) {
        e.stopPropagation();
    });
}