// ========================================
// КАТЕГОРИЯ: ЛИМОНАДЫ
// ========================================

const lemonadesData = [
    // ===== ЛИМОНАДЫ =====
    {
        id: 'lemonade-1',
        name: 'Лимонад с мятой и лаймом',
        description: 'Освежающий лимонад с мятой и лаймом',
        composition: 'Мята, лайм, сахарный сироп, содовая',
        volume: '400 мл',
        price: '280 ₽',
        image: 'images/lemonades/mint_lime.jpg'
    },
    {
        id: 'lemonade-2',
        name: 'Апельсиновый лимонад',
        description: 'Яркий лимонад со свежим апельсином',
        composition: 'Апельсин, мята, сахарный сироп, содовая',
        volume: '400 мл',
        price: '290 ₽',
        image: 'images/lemonades/orange.jpg'
    },
    {
        id: 'lemonade-3',
        name: 'Лайм-маракуйя',
        description: 'Экзотический лимонад с лаймом и маракуйей',
        composition: 'Лайм, маракуйя, сахарный сироп, содовая',
        volume: '400 мл',
        price: '320 ₽',
        image: 'images/lemonades/lime_passion.jpg'
    },
    {
        id: 'lemonade-4',
        name: 'Лесные ягоды',
        description: 'Ягодный лимонад с лесными ягодами',
        composition: 'Малина, черника, ежевика, сахарный сироп, содовая',
        volume: '400 мл',
        price: '310 ₽',
        image: 'images/lemonades/berries.jpg'
    },
    {
        id: 'lemonade-5',
        name: 'Тропический лимонад',
        description: 'Тропический микс с манго и маракуйей',
        composition: 'Манго, маракуйя, ананас, сахарный сироп, содовая',
        volume: '400 мл',
        price: '330 ₽',
        image: 'images/lemonades/tropical.jpg'
    },

    // ===== РАЗДЕЛИТЕЛЬ =====
    // Специальный объект-разделитель
    {
        id: 'divider-1',
        name: '────────── ФРЕШИ ──────────',
        description: '',
        composition: '',
        volume: '',
        price: '',
        image: '',
        isDivider: true
    },

    // ===== ФРЕШИ =====
    {
        id: 'lemonade-6',
        name: 'Фреш апельсиновый',
        description: 'Свежевыжатый апельсиновый сок',
        composition: 'Апельсин, лёд',
        volume: '300 мл',
        price: '250 ₽',
        image: 'images/lemonades/fresh_orange.jpg'
    },
    {
        id: 'lemonade-7',
        name: 'Фреш яблочный',
        description: 'Свежевыжатый яблочный сок',
        composition: 'Яблоко, лёд',
        volume: '300 мл',
        price: '230 ₽',
        image: 'images/lemonades/fresh_apple.jpg'
    },
    {
        id: 'lemonade-8',
        name: 'Фреш ананасовый',
        description: 'Свежевыжатый ананасовый сок',
        composition: 'Ананас, лёд',
        volume: '300 мл',
        price: '260 ₽',
        image: 'images/lemonades/fresh_pineapple.jpg'
    },
    {
        id: 'lemonade-9',
        name: 'Цитрусовый микс',
        description: 'Микс из грейпфрута, апельсина и лайма',
        composition: 'Грейпфрукт, апельсин, лайм, лёд',
        volume: '300 мл',
        price: '280 ₽',
        image: 'images/lemonades/fresh_citrus.jpg'
    },
    {
        id: 'lemonade-10',
        name: 'Фреш гранатовый',
        description: 'Свежевыжатый гранатовый сок',
        composition: 'Гранат, лёд',
        volume: '300 мл',
        price: '290 ₽',
        image: 'images/lemonades/fresh_pomegranate.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lemonadesData;
}