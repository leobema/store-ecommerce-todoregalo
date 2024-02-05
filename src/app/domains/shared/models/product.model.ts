import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    creationAt: string;
    category: Category;
    images: string[];
}