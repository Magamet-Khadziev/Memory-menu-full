// ========================================
// НАВИГАЦИЯ (дополнительные функции)
// ========================================

// Вспомогательная функция для плавного скролла к верху страницы
function scrollToTop() {
    const content = document.querySelector('.content');
    if (content) {
        content.scrollTop = 0;
        content.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Обработка кнопки "Назад" в браузере
window.addEventListener('popstate', function(event) {
    if (typeof goBack === 'function') {
        goBack();
    }
});