export interface IProduct {
    id: string;
    title: string;
    price: string;
    thumbnail: string;
}
export interface IData {
    products: IProduct[];
    limit: number;
    skip: number;
    total: number;
}
