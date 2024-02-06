import { Component, Input, inject, signal, effect } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model'
import { CartService } from '../../../shared/services/cart.service';
import { ValueSetter } from 'date-fns/parse/_lib/Setter';
import { state } from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product : Product | undefined;
  cover = signal('');
  @Input() id?: number; 
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private cartService = inject(CartService)
  cant = signal<number>(1);

  constructor() {
   
  }

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
    if(this.product) {
      this.cartService.addToCart(this.product, this.cant())
    }
  }

  /* changeHandler(cant: String) {
    this.cant.update(_ => +cant)
  } */

  changeHandler(cant: String)  {
      this.cant.update(_ => +cant)
      const currentValue = +cant
      if (currentValue) {
      (currentValue <= 4)
      currentValue;
    }
        else this.product?.cant
  }

  getCategory(id: number | undefined) {
    if (!id) {
      return null
    }
    return this.categoryService.get(id)
  } 
}



