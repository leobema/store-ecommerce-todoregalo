import { Injectable, signal, computed } from '@angular/core';
import { state } from '@angular/animations';
import { signalUpdateFn } from '@angular/core/primitives/signals';

import { Product } from './../models/product.model';
import { Cart } from './../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<Cart[]>([]);
  total = computed(() =>{
    const cart = this.cart();
    return cart.reduce((total, cartItem) => total + (cartItem.product.price * cartItem.cant), 0);
  });
  
  constructor() { }
  
  addToCart(product: Product, cant: number) {
    this.cart.update(state => {
      const currentItem = state.find(item => item.product.id === product.id);
      if (currentItem) {
        currentItem.cant += cant;
        if (currentItem.cant > currentItem.product.cant) {
          currentItem.cant = currentItem.product.cant;
        }
      } else {
        state.push({
          product,
          cant,
        });
      }
      return [...state];
    });
  };

  clearCart() {
    this.cart.set([])
  };

  removeItemCart(index: number) {
    this.cart.update((state: Cart[]) => {
      state.splice(index, 1);
      return [...state];
    });
  };

}
