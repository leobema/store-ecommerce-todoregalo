import { Component, inject } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../shared/services/product.service'; 
import { ProductComponent } from '../../products/pages/product/product.component';
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './mujer.component.html',
  styleUrl: './mujer.component.css'
})
export class MujerComponent {
  productdb: Product[] = [];
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product1 = "";

  private idProductsToShow = [6]

  constructor(){
    this.productdb = this.productService.getAllProducts().filter(p => this.idProductsToShow.includes(p.category_id));
  }

  addToCart(product: Product) {

     this.cartService.addToCart(product, 1)
   };
}
