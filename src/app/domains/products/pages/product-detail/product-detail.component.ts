import { Component, Input, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ProductService } from '../../../shared/services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model'

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

    product : Product | undefined ;
    @Input() id?: number; 
    private productService = inject(ProductService);

    ngOnInit() {
      if (this.id) {
      this.product = this.productService.getProductById(+this.id);
      }      
    }
}
