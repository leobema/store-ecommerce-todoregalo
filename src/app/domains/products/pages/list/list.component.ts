import { Component, signal, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from './../../../shared/services/cart.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([]);
  private cartService = inject(CartService)

  constructor(){
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Prod 1',
        price: 100,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 2',
        price: 200,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Prod 3',
        price: 300,
        image: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
        creationAt: new Date().toISOString()
      }
    ];
    this.products.set(initProducts)
  }

  addToCart(product: Product) {
   // console.log('escuchando al hijo')
    this.cartService.addToCart(product)
  }

}
