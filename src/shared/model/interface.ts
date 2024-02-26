export interface IProduct {
    id: string; //
    title: string; //
    price: number; //
    thumbnail: string; //
    rating: number; //
    discountPercentage?: number;
    stock?: string;
    brand?: string;
    category?: string;
    description?: string;
}
export interface IData {
    products: IProduct[];
    limit: number;
    skip: number;
    total: number;
}
