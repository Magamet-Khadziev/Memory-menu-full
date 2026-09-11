// ========================================
// КАТЕГОРИЯ: ЗАВТРАКИ
// ========================================

const breakfastsData = [
    // ===== ОСНОВНЫЕ ПОЗИЦИИ =====
    {
        id: 'breakfast-1',
        name: 'Шакшука',
        description: 'Яйца в томатном соусе с болгарским перцем и специями',
        composition: 'Яйца, томаты, болгарский перец, лук, специи, зелень',
        volume: '250 г',
        price: '380 ₽',
        image: 'images/breakfasts/shakshuka.jpg'
    },
    {
        id: 'breakfast-2',
        name: 'Блинчики',
        description: 'Тонкие блинчики с начинкой на выбор',
        composition: 'Сметана, финики, шоколадная паста, ягоды, банан',
        volume: '3 шт',
        price: '320 ₽',
        image: 'images/breakfasts/bliny.jpg'
    },
    {
        id: 'breakfast-3',
        name: 'Сырники',
        description: 'Нежные сырники со сметаной и ягодным соусом',
        composition: 'Творог, мука, яйцо, сахар, сметана, ягоды',
        volume: '200 г',
        price: '350 ₽',
        image: 'images/breakfasts/syrniki.jpg'
    },
    {
        id: 'breakfast-4',
        name: 'Венские вафли',
        description: 'Хрустящие вафли с шоколадом и ягодами',
        composition: 'Вафли, шоколад, ягоды, банан, орехи',
        volume: '180 г',
        price: '340 ₽',
        image: 'images/breakfasts/vafly.jpg'
    },
    {
        id: 'breakfast-5',
        name: 'Каша рисовая',
        description: 'Нежная рисовая каша с ягодами и орехами',
        composition: 'Рис, молоко, ягоды, орехи, мёд',
        volume: '250 г',
        price: '260 ₽',
        image: 'images/breakfasts/rice_kasha.jpg'
    },
    {
        id: 'breakfast-6',
        name: 'Каша овсяная',
        description: 'Овсяная каша с бананом и орехами',
        composition: 'Овсяные хлопья, молоко, банан, шоколадная паста, орехи',
        volume: '250 г',
        price: '280 ₽',
        image: 'images/breakfasts/oatmeal.jpg'
    },
    {
        id: 'breakfast-7',
        name: 'Брускетта с лососем',
        description: 'Хрустящий хлеб с лососем и зеленью',
        composition: 'Хлеб, лосось, сливочный сыр, зелень',
        volume: '150 г',
        price: '380 ₽',
        image: 'images/breakfasts/bruschetta_salmon.jpg'
    },

    // ===== НОВЫЕ ПОЗИЦИИ =====
    {
        id: 'breakfast-8',
        name: 'Каша Тальбина',
        description: 'Нежная каша с бананами, орехами и мёдом',
        composition: 'Молоко, крупа, банан, орехи, мёд',
        volume: '250 г',
        price: '290 ₽',
        image: 'images/breakfasts/kasha_malvina.jpg'
    },
    {
        id: 'breakfast-9',
        name: 'Брускетта с яйцом пашот',
        description: 'Хрустящий хлеб  и яйцом пашот',
        composition: 'Хлеб, курица, яйцо, зелень, соус',
        volume: '180 г',
        price: '360 ₽',
        image: 'images/breakfasts/bruschetta_chicken.jpg'
    },

    // ===== СЭНДВИЧИ =====
    {
        id: 'breakfast-10',
        name: 'Сэндвич с курицей',
        description: 'Сочный сэндвич с курицей и свежими овощами',
        composition: 'Хлеб, курица, салат, помидор, соус',
        volume: '200 г',
        price: '320 ₽',
        image: 'images/breakfasts/sandwich_chicken.jpg'
    },
    {
        id: 'breakfast-11',
        name: 'Сэндвич с говядиной',
        description: 'Сытный сэндвич с говядиной и карамелизированным луком',
        composition: 'Хлеб, говядина, лук, сыр, соус',
        volume: '220 г',
        price: '370 ₽',
        image: 'images/breakfasts/sandwich_beef.jpg'
    },
    {
        id: 'breakfast-12',
        name: 'Сэндвич с лососем',
        description: 'Сэндвич с лососем и сливочным сыром',
        composition: 'Хлеб, лосось, сливочный сыр, зелень, лимон',
        volume: '200 г',
        price: '390 ₽',
        image: 'images/breakfasts/sandwich_salmon.jpg'
    },
    {
        id: 'breakfast-13',
        name: 'Сэндвич-бургер',
        description: 'Сочный бургер с говяжьей котлетой и овощами',
        composition: 'Булочка, говяжья котлета, сыр, салат, помидор, соус',
        volume: '250 г',
        price: '420 ₽',
        image: 'images/breakfasts/burger.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = breakfastsData;
}