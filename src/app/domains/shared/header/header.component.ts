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
  toggleMenu = false
  highSideMenu = signal(true);
  private cartService = inject(CartService)
  cart = this.cartService.cart;
  total = this.cartService.total;
  
    toggleSideMenu(){
      this.highSideMenu.update(prevState => !prevState);
    }
  
}


