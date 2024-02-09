
import { Component, inject } from '@angular/core';
import { ListComponent } from '../../products/pages/list/list.component';
import { ProductService } from './../../shared/services/product.service'
import { Product } from '../../shared/models/product.model';
import { CategoryService } from '../../shared/services/category.service';
import { CartService } from '../../shared/services/cart.service';
import { CommonModule } from '@angular/common';
//import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [ListComponent, CommonModule],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  private productService: ProductService = inject(ProductService);
  private categoryService: CategoryService = inject(CategoryService);
  private cartService: CartService = inject(CartService);
  products: Product[] = [];
  //totalProducts = totalProducts

  

  ngOnInit () {
    this.getAllProducts();
   // this.totalProducts = data.length;
    //this.getCategories();
   
  }

  private getAllProducts(){
    this.products = this.productService.getAllProducts();

  }

  /* private getCategories(){
    this.categorie = this.categoryService.getAll();
  }   */
}

