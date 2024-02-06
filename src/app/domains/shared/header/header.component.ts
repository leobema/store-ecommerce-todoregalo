import { CommonModule } from '@angular/common';
import { Component, signal, inject, effect } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductDetailComponent } from '../../products/pages/product-detail/product-detail.component';
import { ProductComponent } from '../../products/pages/product/product.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive, ProductDetailComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu = false;
  toggleMenu2 = false;
  highSideMenu = signal(true);

  cart;
  total;
  
  private cartService = inject(CartService);
  
  constructor() {
    this.cart = this.cartService.cart;
    this.total = this.cartService.total;
  }

    /* effect(() => {
      this.cart
      this.total;
      //const cant = this.cant;
      localStorage.setItem('items', JSON.stringify(this.cart, this.total));
    }) */
 

  /* ngOnInit(){
    const storage = localStorage.getItem('items');
    if (storage) {
      const cart = JSON.parse(storage);
      //const total = JSON.parse(storage);
      this.cart.set(cart) 
      //this.total.set(total);
    }
  } */
  
  toggleSideMenu(){
    this.highSideMenu.update(prevState => !prevState);
  };

  clearToCart() {
    this.cartService.clearCart();
  };

  removeItemCart(index: number) {
    this.cartService.removeItemCart(index)
  }
}
