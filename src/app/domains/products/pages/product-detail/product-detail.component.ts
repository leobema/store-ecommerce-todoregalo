import { Component, Input, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { CommonModule, NgSwitch } from '@angular/common';
import { Product } from './../../../shared/models/product.model'
import { CartService } from '../../../shared/services/cart.service';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import moment from 'moment';
import { ShipmentType } from '../../../shared/models/shipment.model';

moment.locale('es');


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ListCategoriesComponent, FormsModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  ShipmentType: ShipmentType | undefined;
  product : Product | undefined;
  cover = signal('');
  @Input() id?: number; 
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private cartService = inject(CartService)
  cant = signal<number>(1);
  
  public shipmentTypes: ShipmentType[];

  classicShippingPrice = 4500;
  expressShippingPrice = 6800;
  
shipmentTypesValue = 0;

  constructor(){
    this.shipmentTypes = [
      {
        code: 'classic',
        title: 'Envío Clasico',
        averageDateRange: [
          moment().add(7, 'days').format('D'),
          moment().add(12, 'days').format('DMMM'),
        ],
        priceWithOutDiscount: this.classicShippingPrice * 1.5,
        priceWithDiscount: this.classicShippingPrice,
      },
      {
        code: 'express',
        title: 'Envío Express',
        averageDateRange: [
          moment().add(3, 'days').format('D'),
          moment().add(6, 'days').format('DMMM'),
        ],
        priceWithOutDiscount: this.expressShippingPrice * 1.5,
        priceWithDiscount: this.expressShippingPrice,
      }
    ]
}

   public get shipmentSelected() {
    return this.shipmentTypes[this.shipmentTypesValue];
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


  controlEnvio = new FormGroup({
    selectEnvio: new FormControl('')

  })

  changeCover(newImg: string) {
    this.cover.set(newImg);
  }

  addToCart() {
    if(this.product) {
      this.cartService.addToCart(this.product, this.cant())
    }
  }

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
