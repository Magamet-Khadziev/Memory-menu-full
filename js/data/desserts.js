// ========================================
// КАТЕГОРИЯ: ДЕСЕРТЫ
// ========================================

const dessertsData = [
    {
        id: 'dessert-1',
        name: 'Чизкейк Нью-Йорк',
        description: 'Нежный творожный чизкейк с ягодным соусом',
        composition: 'Творожный сыр, сливки, яйца, печенье, ягоды',
        volume: '200 г',
        price: 380,
        image: 'images/desserts/cheesecake.jpg'
    },
    {
        id: 'dessert-2',
        name: 'Тирамису',
        description: 'Итальянский десерт с кофе и маскарпоне',
        composition: 'Маскарпоне, бисквит савоярди, кофе, какао',
        volume: '180 г',
        price: 400,
        image: 'images/desserts/tiramisu.jpg'
    },
    {
        id: 'dessert-3',
        name: 'Брауни',
        description: 'Шоколадный пирог с орехами и мороженым',
        composition: 'Тёмный шоколад, мука, яйца, орехи, мороженое',
        volume: '150 г',
        price: 350,
        image: 'images/desserts/brownie.jpg'
    },
    {
        id: 'dessert-4',
        name: 'Панна-котта',
        description: 'Нежный ванильный десерт с ягодным соусом',
        composition: 'Сливки, ваниль, сахар, желатин, ягодный соус',
        volume: '150 г',
        price: 320,
        image: 'images/desserts/panna_cotta.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = dessertsData;
}