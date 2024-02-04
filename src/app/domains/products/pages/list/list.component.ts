import { Component, signal, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from './../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from './../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //product = signal<Product[]>([]);
  productdb: Product[] = [];
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  constructor(){
    this.productdb = this.productService.getAllProducts();
  
  }
  addToCart(product: Product) {
   // console.log('escuchando al hijo')
    this.cartService.addToCart(product)
  }

}
