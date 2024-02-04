import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ListComponent } from '../../products/pages/list/list.component';
import { ProductService } from './../../shared/services/product.service'
import { Product } from '../../shared/models/product.model';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ListComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  productService: ProductService = inject(ProductService);
  products: Product[] = [];


  constructor () {
    this.products = this.productService.getAllProducts();
  }

}

