// ========================================
// КАТЕГОРИЯ: САЛАТЫ
// ========================================

const saladsData = [
    {
        id: 'salad-1',
        name: 'Салат Цезарь',
        description: 'Классический салат Цезарь с курицей',
        composition: 'Пекинская капуста, помидоры черри, курица, сухари, сыр, соус Цезарь',
        volume: '300 г',
        price: '420 ₽',
        image: 'images/salads/caesar.jpg'
    },
    {
        id: 'salad-2',
        name: 'Салат Греческий',
        description: 'Свежий греческий салат с сыром фета',
        composition: 'Черри, оливки, красный лук, сыр фета, микс салата',
        volume: '280 г',
        price: '380 ₽',
        image: 'images/salads/greek.jpg'
    },
    {
        id: 'salad-3',
        name: 'Овощная нарезка',
        description: 'Свежие сезонные овощи',
        composition: 'Огурцы, помидоры, перец, зелень',
        volume: '200 г',
        price: '250 ₽',
        image: 'images/salads/vegetables.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = saladsData;
}