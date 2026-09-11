// ========================================
// КАТЕГОРИЯ: ОСНОВНОЕ МЕНЮ
// ========================================

const mainData = [
    // ===== ПИЦЦА =====
    {
        id: 'main-1',
        name: 'Пицца Ассорти',
        description: 'Пицца с разнообразными начинками',
        composition: 'Тесто, томатный соус, сыр, колбаса, ветчина, грибы, перец, лук',
        volume: '600 г',
        price: '650 ₽',
        image: 'images/main/pizza_assorti.jpg'
    },
    {
        id: 'main-2',
        name: 'Пицца Маргарита',
        description: 'Классическая пицца с томатами и сыром',
        composition: 'Тесто, томатный соус, сыр моцарелла, базилик, помидоры',
        volume: '550 г',
        price: '550 ₽',
        image: 'images/main/pizza_margarita.jpg'
    },
    {
        id: 'main-3',
        name: 'Пицца Пепперони',
        description: 'Пицца с пикантной пепперони и сыром',
        composition: 'Тесто, томатный соус, сыр моцарелла, пепперони, орегано',
        volume: '550 г',
        price: '580 ₽',
        image: 'images/main/pizza_pepperoni.jpg'
    },
    {
        id: 'main-4',
        name: 'Пицца Куриная',
        description: 'Пицца с курицей и соусом песто',
        composition: 'Тесто, курица, сыр, соус песто, помидоры, лук',
        volume: '600 г',
        price: '620 ₽',
        image: 'images/main/pizza_chicken.jpg'
    },
    {
        id: 'main-5',
        name: 'Пицца Мясная',
        description: 'Сытная пицца с мясным ассорти',
        composition: 'Тесто, томатный соус, сыр, бекон, колбаса, ветчина, перец',
        volume: '650 г',
        price: '680 ₽',
        image: 'images/main/pizza_meat.jpg'
    },
    {
        id: 'main-6',
        name: 'Пицца Цезарь',
        description: 'Пицца с курицей и соусом Цезарь',
        composition: 'Тесто, курица, сыр, салат, соус Цезарь, помидоры',
        volume: '600 г',
        price: '640 ₽',
        image: 'images/main/pizza_caesar.jpg'
    },

    // ===== ЗАКУСКИ =====
    {
        id: 'main-7',
        name: 'Наггетсы',
        description: 'Хрустящие куриные наггетсы с соусом',
        composition: 'Куриное филе, панировка, соус на выбор',
        volume: '200 г',
        price: '320 ₽',
        image: 'images/main/nuggets.jpg'
    },
    {
        id: 'main-8',
        name: 'Картошка фри',
        description: 'Золотистая хрустящая картошка фри',
        composition: 'Картофель, масло, соль',
        volume: '180 г',
        price: '220 ₽',
        image: 'images/main/fries.jpg'
    },

    // ===== СУПЫ =====
    {
        id: 'main-9',
        name: 'Том Ям',
        description: 'Острый тайский суп с креветками и кокосовым молоком',
        composition: 'Креветки, кокосовое молоко, лемонграсс, имбирь, грибы, чили',
        volume: '400 мл',
        price: '480 ₽',
        image: 'images/main/tom_yam.jpg'
    },

    // ===== ЛЕПЁШКИ =====
    {
        id: 'main-10',
        name: 'Чапильг',
        description: 'Традиционная лепёшка с творогом и зеленью',
        composition: 'Лепешка, творог, зелень, специи',
        volume: '200 г',
        price: '280 ₽',
        image: 'images/main/chapilg.jpg'
    },
    {
        id: 'main-11',
        name: 'Хингалаш',
        description: 'Традиционная лепёшка с тыквой и специями',
        composition: 'Лепешка, тыква, специи, зелень',
        volume: '200 г',
        price: '260 ₽',
        image: 'images/main/kingalash.jpg'
    },

    // ===== ТОРТИЛЬЯ =====
    {
        id: 'main-12',
        name: 'Тортилья с грибами',
        description: 'Пшеничная тортилья с грибами и яйцом',
        composition: 'Тортилья, грибы, сыр, яйцо, томаты, зелень',
        volume: '250 г',
        price: '380 ₽',
        image: 'images/main/tortilla.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = mainData;
}