import { Component, Input, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ProductService } from '../../../shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model'
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {


    product : Product | undefined ;
    cover = signal('');
    @Input() id?: number; 
    private productService = inject(ProductService);
    private cartService = inject(CartService)

    ngOnInit() {
      if (this.id) {
      this.product = this.productService.getProductById(+this.id);
        if (this.product?.images) {
            (this.product.images.length > 0)
            this.cover.set(this.product.images[0]);
        }
      }      
    }

    changeCover(newImg: string) {
      this.cover.set(newImg);
    }

    addToCart() {
      const product = this.product;
      if(product) {
      this.cartService.addToCart(product)
    }
  }
}
