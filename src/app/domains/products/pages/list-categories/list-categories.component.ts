import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLinkWithHref } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProductService } from './../../../shared/services/product.service';
import { CartService } from './../../../shared/services/cart.service';
import { CategoryService } from './../../../shared/services/category.service';
import { Product } from './../../../shared/models/product.model';
import { Category } from './../../../shared/models/category.model';


@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})

export class ListCategoriesComponent {
  productdb: Product[] = [];
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  categorydb: Category[] = [];
  private categoryService = inject(CategoryService);

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
      } else {
        this.productdb = this.productService.getProductByCategory(+category_id);
      }
    });
  }

  categoryId(){
    this.categoryService.get  
  } 

}
