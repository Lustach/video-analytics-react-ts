
export type Category<T> = {
    category: {
        subcategory?: {
            name: string;
            items?: (T)[];
        };
        name: string;
        items?: (T)[];
    };
    [key: string]: any
};
export type Item = {
    key: number
    name: string
    link: string// string for anchor
}