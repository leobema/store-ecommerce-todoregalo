import { Component, inject } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service'; 

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css'
})


export class FeaturedProductsComponent {
  productdb: Product[] = [];
  private productService = inject(ProductService);
  product1 = "";

  constructor(){
        this.productdb = this.productService.getAllProducts();    
      }

   /*    productUno(){
        this.product1 = this.productdb
      } */



}

