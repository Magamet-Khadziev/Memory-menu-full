// ========================================
// КАТЕГОРИЯ: КОКТЕЙЛИ
// ========================================

const cocktailsData = [
    {
        id: 'cocktail-1',
        name: 'Мохито классический',
        description: 'Классический кубинский коктейль с мятой и лаймом',
        composition: 'Ром, мята, лайм, сахарный сироп, содовая',
        volume: '400 мл',
        price: '350 ₽',
        image: 'images/cocktails/mojito_classic.jpg'
    },
    {
        id: 'cocktail-2',
        name: 'Мохито клубничный',
        description: 'Освежающий мохито с клубникой',
        composition: 'Ром, клубника, мята, лайм, сахарный сироп, содовая',
        volume: '400 мл',
        price: '380 ₽',
        image: 'images/cocktails/mojito_strawberry.jpg'
    },
    {
        id: 'cocktail-3',
        name: 'Шмель',
        description: 'Кофейный коктейль с медовым вкусом',
        composition: 'Кофе, мёд, лимон, имбирь, тоник',
        volume: '350 мл',
        price: '360 ₽',
        image: 'images/cocktails/bumblebee.jpg'
    },
    {
        id: 'cocktail-4',
        name: 'Бемби',
        description: 'Нежный сливочный коктейль',
        composition: 'Сливки, молоко, карамельный сироп, корица',
        volume: '350 мл',
        price: '340 ₽',
        image: 'images/cocktails/bambi.jpg'
    },
    {
        id: 'cocktail-5',
        name: 'Клубнично-апельсиновый',
        description: 'Яркий коктейль с клубникой и апельсином',
        composition: 'Водка, клубника, апельсиновый сок, лёд',
        volume: '350 мл',
        price: '390 ₽',
        image: 'images/cocktails/strawberry_orange.jpg'
    },
    {
        id: 'cocktail-6',
        name: 'Банановый коктейль',
        description: 'Кремовый коктейль с бананом и молоком',
        composition: 'Ром, банан, молоко, сливки, ваниль',
        volume: '350 мл',
        price: '370 ₽',
        image: 'images/cocktails/banana.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cocktailsData;
}