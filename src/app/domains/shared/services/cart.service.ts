import { Injectable, signal, computed } from '@angular/core';
import { Product } from './../models/product.model'
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);
  total = computed(() =>{
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });
  

  constructor() { }

  addToCart(product: Product) {
    this.cart.update(state => [...state, product]);
  };

  clearCart() {
    this.cart.set([])
  }

}
