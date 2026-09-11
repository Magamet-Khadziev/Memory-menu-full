// ========================================
// КАТЕГОРИЯ: ЧАИ
// ========================================

const teasData = [
    {
        id: 'tea-1',
        name: 'Чёрный чай',
        description: 'Классический цейлонский чёрный чай',
        composition: 'Цейлонский чёрный чай',
        volume: '350 мл',
        price: '200 ₽',
        image: 'images/teas/black_tea.jpg'
    },
    {
        id: 'tea-2',
        name: 'Спелая вишня',
        description: 'Ароматный чай с нотками вишни',
        composition: 'Чёрный чай, вишня, специи',
        volume: '350 мл',
        price: '220 ₽',
        image: 'images/teas/cherry.jpg'
    },
    {
        id: 'tea-3',
        name: 'Граф Орлов',
        description: 'Элитный чай с бергамотом',
        composition: 'Чёрный чай, бергамот',
        volume: '350 мл',
        price: '240 ₽',
        image: 'images/teas/orlov.jpg'
    },
    {
        id: 'tea-4',
        name: 'Облепиховый чай',
        description: 'Согревающий чай с облепихой и имбирём',
        composition: 'Зелёный чай, облепиха, имбирь, мёд',
        volume: '350 мл',
        price: '260 ₽',
        image: 'images/teas/sea_buckthorn.jpg'
    },
    {
        id: 'tea-5',
        name: 'Манго-Маракуйя',
        description: 'Тропический чай с манго и маракуйей',
        composition: 'Зелёный чай, манго, маракуйя',
        volume: '350 мл',
        price: '280 ₽',
        image: 'images/teas/mango_passion.jpg'
    },
    {
        id: 'tea-6',
        name: 'Индийский чай',
        description: 'Насыщенный индийский чай с пряными нотками',
        composition: 'Индийский чёрный чай, специи',
        volume: '350 мл',
        price: '250 ₽',
        image: 'images/teas/indian.jpg'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = teasData;
}