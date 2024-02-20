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
      name: 'Almohadones',
      image: './../../../../assets/images/categorias/categoria-almohadas-01.jpg'
    },
    {
      id: 2,
      name: 'Corset',
      image: './../../../../assets/images/categorias/categoria-corset-01.jpg'
    },
    {
      id: 3,
      name: 'Lenceria',
      image: './../../../../assets/images/categorias/categoria-lenceria-01.jpg'
    },
    {
      id: 4,
      name: 'Impresion 3D',
      image: './../../../../assets/images/categorias/categoria-impresion-3D-01.jpg'
    },
    {
      id: 5,
      name: 'Tazas Sublimadas',
      image: './../../../../assets/images/categorias/categoria-tazas-sublimadas-01.jpg'
    },
    {
      id: 6,
      name: 'Ropa para Dama',
      image: './../../../../assets/images/categorias/categoria-ropa-dama-01.jpg'
    },
    {
      id: 7,
      name: 'Ropa para Hombre',
      image: './../../../../assets/images/categorias/categoria-ropa-hombre-01.jpg'
    },
    {
      id: 8,
      name: 'Fundas de Almohadas',
      image: './../../../../assets/images/categorias/categoria-fundas-01.jpg'
    }
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
