import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    creationAt: string;
    category_id: number;
    images: string[];
    cant: number;
}