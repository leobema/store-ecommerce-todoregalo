import { Injectable, inject } from '@angular/core';
import { ProductService } from './product.service';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorydb: Category[] = [
    {
      id: 1,
      name: 'Belinda',
      image: 'https://i1.sndcdn.com/artworks-000012658138-jgjuck-t500x500.jpg'
    },
    {
      id: 2,
      name: 'chayanne',
      image: 'https://i1.sndcdn.com/artworks-000012658138-jgjuck-t500x500.jpg'
    },
    {
      id: 3,
      name: 'ricardo arjona',
      image: 'https://i1.sndcdn.com/artworks-000012658138-jgjuck-t500x500.jpg'
    },
    {
      id: 5,
      name: 'Benito',
      image: 'https://i1.sndcdn.com/artworks-000012658138-jgjuck-t500x500.jpg'
    },
  ]
  private productService: ProductService = inject(ProductService);
  //productdb = ProductService;

  constructor() { }

  getAll() : Category[] {
    return this.categorydb;
  }

  get(id: number) : Category | undefined {
    return this.categorydb.find(category => id === category.id);
  }
}
