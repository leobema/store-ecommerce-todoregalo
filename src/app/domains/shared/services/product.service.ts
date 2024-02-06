import { Injectable } from '@angular/core';
import { Product } from './../../../domains/shared/models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  get<T>(productdb: ProductService) {
    throw new Error('Method not implemented.');
  }

  productdb: Product[] = [
    {
      id: 1,
      title: 'Prod 1',
      description: 'Esto es la descripcion Prod 1',
      price: 100,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://cdns-images.dzcdn.net/images/artist/03ac3759cf240640d902d9aa5a067632/500x500.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],  
      cant: 3,
    },
    {
      id: 2,
      title: 'Prod 2',
      description: 'Esto es la descripcion Prod 2',
      price: 200,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://m.media-amazon.com/images/I/419mR+BiEiL._SL500_.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,
    },
    {
      id: 3,
      title: 'Prod 3',
      description: 'Esto es la descripcion Prod 3',
      price: 300,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://m.media-amazon.com/images/I/41cxUMcT-pL._AC_.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,
    },
    {
      id: 4,
      title: 'Prod 4',
      description: 'Esto es la descripcion Prod 4',
      price: 400,
      image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      creationAt: new Date().toISOString(),
      category_id: 5,
      images: [
        'https://drimerchocolates.com.ar/upload/images/512x512/corazon-de-chocolate-latidos-12grs--1658876346.jpg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/dd574b8c-3262-41c3-a671-f98ed74e26c7/d4691o5-352c7226-2945-4c62-b7c6-e1f6522ab358.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkNTc0YjhjLTMyNjItNDFjMy1hNjcxLWY5OGVkNzRlMjZjN1wvZDQ2OTFvNS0zNTJjNzIyNi0yOTQ1LTRjNjItYjdjNi1lMWY2NTIyYWIzNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.w8TqQzOtiV_sewPKL17Tpx5UupGEpeZ68i6QIbmtwJk',
        'https://undibujo.com/wp-content/uploads/2018/04/stitch-para-imprimir.jpg'
      ],
      cant: 3,  
    }
  ];

  constructor() { }
  
  getAllProducts() : Product[] {
    return this.productdb;
  }

  getProductById(id: number) : Product | undefined {
    return this.productdb.find(product => id === product.id); 
  }

  getProductByCategory(id: number) : Product[] {
    return this.productdb.filter(product => id === product.category_id); 
  }
  /*
  getProductsById(id: string) {
    return this.productdb.find(product => product.id);
  } 
  */
}
