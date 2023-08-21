
export type Category<T> = {
    category: {
        subcategory?: {
            name: string;
            items?: (T & Item)[];
        };
        name: string;
        items?: (T & Item)[];
    };
    [key: string]: any
};
export type Item = {
    key: number
    name: string
    link: string// string for anchor
}
// export type Options = Category<Item>[]

// export type Categories = {
//     [key: string]: string
// }