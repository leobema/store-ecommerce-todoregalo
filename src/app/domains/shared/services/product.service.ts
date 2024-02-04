import { Injectable } from '@angular/core';
import { Product } from './../../../domains/shared/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   productdb: Product[] = [
    {
      id: 1,
      title: 'Prod 1',
      price: 100,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      creationAt: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Prod 2',
      price: 200,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      creationAt: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Prod 3',
      price: 300,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      creationAt: new Date().toISOString()
    }
  ];

  constructor() { }
  
  getAllProducts() : Product[] {
    return this.productdb;
  }

   getProductsById(id: number): Product | undefined {
    return this.productdb.find(product => product.id === id);
  } 

}
