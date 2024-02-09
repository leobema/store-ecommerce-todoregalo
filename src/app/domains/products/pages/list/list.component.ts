import { Component, inject } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from './../../../shared/models/product.model';
import { CartService } from './../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';
import { ActivatedRoute, ParamMap, RouterLinkWithHref } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ListCategoriesComponent } from './../../../products/pages/list-categories/list-categories.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ CommonModule, NgxPaginationModule, ProductComponent, RouterLinkWithHref, ListCategoriesComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //product = signal<Product[]>([]);
  productdb: Product[] = [];
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  categorydb: Category[] = [];
  private categoryService = inject(CategoryService);
  p: number = 1;
  itemsPerPage: number = 16;
  totalProductPage:any;
  //collection: any[] = someArrayOfThings;


  category_id$: Observable<string|null>;

  constructor(
    private route: ActivatedRoute
  ) {
    this.category_id$ = this.route.queryParamMap.pipe(
      map((params: ParamMap) => params.get('category_id')),
    );

    this.categorydb = this.categoryService.getAll();
    this.category_id$.subscribe(category_id => {
      if (category_id === null) {
        this.productdb = this.productService.getAllProducts();
         this.totalProductPage = this.productdb.length;
      } else {
        this.productdb = this.productService.getProductByCategory(+category_id);
      }
    });
  }


  categoryId(){
      this.categoryService.get  
    } 
 /* ngOnChanges(categorydb: Category) {
    //console.log(this.category_id)
     const category_id = categorydb['id'];
     if (category_id) {
      this.category_id.getAll(); 
    }
  } */
 
  addToCart(product: Product) {
   // console.log('escuchando al hijo')
    this.cartService.addToCart(product, 1)
  };
  

}
