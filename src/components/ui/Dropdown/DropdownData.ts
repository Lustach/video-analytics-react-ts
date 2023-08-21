import type { Category, Item } from "./type"

export const options: Category<Item>[] = [{
    'category': {
        name: 'Величайшие', items: [
            { key: 6, name: 'Dnepr', link: 'https://www.lada.ru/en' },
            { key: 5, name: 'UAZ', link: 'https://www.lada.ru/en' },
            { key: 7, name: 'Volga', link: 'https://www.lada.ru/en' },
            { key: 8, name: 'Zaporozie', link: 'https://www.lada.ru/en' },
        ],
        subcategory: {
            name: 'Легенды', items: [
                { key: 11, name: 'Donbass', link: 'https://www.lada.ru/en' },
            ]
        }
    },
}, {
    'category': {
        name: 'Для дебилов', items: [
            { key: 0, name: 'Lada', link: 'https://www.lada.ru/en' },
            { key: 1, name: 'BMW', link: 'https://www.lada.ru/en' },
            { key: 2, name: 'NISSAN', link: 'https://www.lada.ru/en' },
            { key: 3, name: 'MITSHUBISI', link: 'https://www.lada.ru/en' },
            { key: 4, name: 'Scoda', link: 'https://www.lada.ru/en' },
            { key: 9, name: 'UAZ', link: 'https://www.lada.ru/en' },
            { key: 10, name: 'Volga', link: 'https://www.lada.ru/en' },
        ],
    }
}, {
    'category': {
        name: 'Хто я', items: [{ key: 12, name: 'Test', link: '#test', }]
    }
}]