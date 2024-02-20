import { Component, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service'; 
import { ProductComponent } from '../../../../products/pages/product/product.component';
import { CartService } from './../../../services/cart.service';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})


export class FeaturedProductsComponent {
  productdb: Product[] = [];
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product1 = "";

  private idProductsToShow = [1,2,3,4]

  constructor(){
    this.productdb = this.productService.getAllProducts().filter(p => this.idProductsToShow.includes(p.id));
  }

  addToCart(product: Product) {
    // console.log('escuchando al hijo')
     this.cartService.addToCart(product, 1)
   };

}
