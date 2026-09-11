// ========================================
// КАТЕГОРИЯ: КОФЕ
// ========================================

const coffeeData = [
    // ===== КЛАССИЧЕСКИЙ =====
    {
        id: 'coffee-1',
        name: 'Ристретто',
        description: 'Насыщенный, концентрированный эспрессо',
        composition: '100% арабика',
        volume: '25 мл',
        price: '120 ₽',
        image: 'images/coffee/ristretto.jpg'
    },
    {
        id: 'coffee-2',
        name: 'Эспрессо',
        description: 'Классический эспрессо из отборных зёрен',
        composition: '100% арабика',
        volume: '36 мл',
        price: '150 ₽',
        image: 'images/coffee/espresso.jpg'
    },
    {
        id: 'coffee-3',
        name: 'Доппио',
        description: 'Двойная порция эспрессо для насыщенного вкуса',
        composition: '100% арабика',
        volume: '60 мл',
        price: '200 ₽',
        image: 'images/coffee/doppio.jpg'
    },
    {
        id: 'coffee-4',
        name: 'Лунго',
        description: 'Эспрессо с увеличенным объёмом воды для мягкого вкуса',
        composition: '100% арабика, вода',
        volume: '60 мл',
        price: '180 ₽',
        image: 'images/coffee/lungo.jpg'
    },
    {
        id: 'coffee-5',
        name: 'Американо',
        description: 'Эспрессо с кипяченой водой',
        composition: 'Эспрессо, вода',
        volume: '180 мл',
        price: '180 ₽',
        image: 'images/coffee/americano.jpg'
    },
    {
        id: 'coffee-6',
        name: 'Флэт Уайт',
        description: 'Двойной эспрессо с микро-пеной',
        composition: 'Двойной эспрессо, молоко',
        volume: '180 мл',
        price: '250 ₽',
        image: 'images/coffee/flat_white.jpg'
    },
    {
        id: 'coffee-7',
        name: 'Капучино',
        description: 'Эспрессо с нежной молочной пеной',
        composition: 'Эспрессо, молоко',
        volume: '180 / 250 мл',
        price: '200 / 250 ₽',
        image: 'images/coffee/cappuccino.jpg'
    },
    {
        id: 'coffee-8',
        name: 'Латте',
        description: 'Эспрессо с большим количеством молока',
        composition: 'Эспрессо, молоко',
        volume: '300 мл',
        price: '250 ₽',
        image: 'images/coffee/latte.jpg'
    },
    {
        id: 'coffee-9',
        name: 'Раф',
        description: 'Эспрессо со сливками (ванильный, цитрусовый, мускатный)',
        composition: 'Эспрессо, сливки, сироп на выбор',
        volume: '300 мл',
        price: '250 ₽',
        image: 'images/coffee/raf.jpg'
    },
    
    // ===== ХОЛОДНЫЙ КОФЕ =====
    {
        id: 'coffee-10',
        name: 'Айс Кофе',
        description: 'Освежающий холодный кофе со льдом',
        composition: 'Эспрессо, лёд, вода',
        volume: '250 мл',
        price: '280 ₽',
        image: 'images/coffee/ice_coffee.jpg'
    },
    {
        id: 'coffee-11',
        name: 'Айс Латте',
        description: 'Холодный латте со льдом',
        composition: 'Эспрессо, молоко, лёд',
        volume: '300 мл',
        price: '320 ₽',
        image: 'images/coffee/ice_latte.jpg'
    },
    {
        id: 'coffee-12',
        name: 'Бамбл',
        description: 'Кофейный напиток с мёдом и корицей',
        composition: 'Эспрессо, мёд, корица, молоко',
        volume: '300 мл',
        price: '340 ₽',
        image: 'images/coffee/bumble.jpg'
    },
    {
        id: 'coffee-13',
        name: 'Глясе',
        description: 'Эспрессо с мороженым',
        composition: 'Эспрессо, мороженое',
        volume: '200 мл',
        price: '360 ₽',
        image: 'images/coffee/glace.jpg'
    },
    {
        id: 'coffee-14',
        name: 'Фраппе',
        description: 'Освежающий кофейный коктейль со льдом',
        composition: 'Эспрессо, лёд, молоко, сахарный сироп',
        volume: '350 мл',
        price: '320 ₽',
        image: 'images/coffee/frappe.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = coffeeData;
}



// // ========================================
// // КАТЕГОРИЯ: КОФЕ
// // ========================================

// const coffeeData = [
//     // ===== КЛАССИЧЕСКИЙ =====
//     {
//         id: 'coffee-1',
//         name: 'Ристретто',
//         description: 'Насыщенный, концентрированный эспрессо',
//         composition: '100% арабика',
//         volume: '25 мл',
//         price: '120 ₽',
//         image: 'images/coffee/ristretto.jpg'
//     },
//     {
//         id: 'coffee-2',
//         name: 'Эспрессо',
//         description: 'Классический эспрессо из отборных зёрен',
//         composition: '100% арабика',
//         volume: '36 мл',
//         price: '150 ₽',
//         image: 'images/coffee/espresso.jpg'
//     },
//     {
//         id: 'coffee-3',
//         name: 'Американо',
//         description: 'Эспрессо с кипяченой водой',
//         composition: 'Эспрессо, вода',
//         volume: '180 мл',
//         price: '180 ₽',
//         image: 'images/coffee/americano.jpg'
//     },
//     {
//         id: 'coffee-4',
//         name: 'Флэт Уайт',
//         description: 'Двойной эспрессо с микро-пеной',
//         composition: 'Двойной эспрессо, молоко',
//         volume: '180 мл',
//         price: '250 ₽',
//         image: 'images/coffee/flat_white.jpg'
//     },
//     {
//         id: 'coffee-5',
//         name: 'Капучино',
//         description: 'Эспрессо с нежной молочной пеной',
//         composition: 'Эспрессо, молоко',
//         volume: '180 / 250 мл',
//         price: '200 / 250 ₽',
//         image: 'images/coffee/cappuccino.jpg'
//     },
//     {
//         id: 'coffee-6',
//         name: 'Латте',
//         description: 'Эспрессо с большим количеством молока',
//         composition: 'Эспрессо, молоко',
//         volume: '300 мл',
//         price: '250 ₽',
//         image: 'images/coffee/latte.jpg'
//     },
//     {
//         id: 'coffee-7',
//         name: 'Латте маккиато',
//         description: 'Нежный кофейный напиток с молоком',
//         composition: 'Эспрессо, молоко, молочная пена',
//         volume: '300 мл',
//         price: '250 ₽',
//         image: 'images/coffee/latte_macchiato.jpg'
//     },
//     {
//         id: 'coffee-8',
//         name: 'Раф',
//         description: 'Эспрессо со сливками (ванильный, цитрусовый, мускатный)',
//         composition: 'Эспрессо, сливки, сироп на выбор',
//         volume: '300 мл',
//         price: '250 ₽',
//         image: 'images/coffee/raf.jpg'
//     },
    
//     // ===== ХОЛОДНЫЙ КОФЕ =====
//     {
//         id: 'coffee-9',
//         name: 'Холодный урбеч',
//         description: 'Освежающий холодный кофе ',
//         composition: 'Эспрессо, лёд, вода',
//         volume: '250 мл',
//         price: '280 ₽',
//         image: 'images/coffee/ice_coffee.jpg'
//     },
//     {
//         id: 'coffee-10',
//         name: 'Айс Латте',
//         description: 'Холодный латте со льдом',
//         composition: 'Эспрессо, молоко, лёд',
//         volume: '300 мл',
//         price: '320 ₽',
//         image: 'images/coffee/ice_latte.jpg'
//     },
//     {
//         id: 'coffee-11',
//         name: 'Бамбл',
//         description: 'Кофейный напиток с мёдом и корицей',
//         composition: 'Эспрессо, мёд, корица, молоко',
//         volume: '300 мл',
//         price: '340 ₽',
//         image: 'images/coffee/bumble.jpg'
//     },
//     {
//         id: 'coffee-12',
//         name: 'Глясе',
//         description: 'Эспрессо с мороженым',
//         composition: 'Эспрессо, мороженое',
//         volume: '200 мл',
//         price: '360 ₽',
//         image: 'images/coffee/glace.jpg'
//     },
   
// ];

// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = coffeeData;
// }