
import { Component, signal, inject, effect } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductDetailComponent } from '../../products/pages/product-detail/product-detail.component';
import { InfoEnvioComponent } from '../info-envio/info-envio.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive, ProductDetailComponent, InfoEnvioComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu = false;
  toggleMenu2 = false;
  highSideMenu = signal(true);

  cart;
  total;
  cartCount;
  
  private cartService = inject(CartService);
  
  constructor() {
    this.cart = this.cartService.cart;
    this.total = this.cartService.total;
    this.cartCount = this.cartService.cartCount;
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
