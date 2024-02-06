import { CommonModule } from '@angular/common';
import { Component, signal, inject } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive ],
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
