import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ShipmentType } from '../models/shipment.model';
import { CartService } from '../services/cart.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import { ProductDetailComponent } from '../../products/pages/product-detail/product-detail.component';
import moment from 'moment';
import swal from 'sweetalert';

@Component({
  selector: 'app-info-envio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref, ProductDetailComponent],
  templateUrl: './info-envio.component.html',
  styleUrl: './info-envio.component.css'
})

export class InfoEnvioComponent {
  ShipmentType: ShipmentType | undefined;
  cart;
  total;
  cartCount;
  isLoading = true;

 
  public shipmentTypes: ShipmentType[];

  shipmentTypesValue = 0;
  
  private cartService = inject(CartService);
  
  constructor(private router: Router) {
    this.cart = this.cartService.getAll();
    this.total = this.cartService.total;
    this.cartCount = this.cartService.cartCount;
    this.shipmentTypesValue = this.shipmentTypesValue;

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
  


  classicShippingPrice = 5490;
  expressShippingPrice = 11300;


   public get shipmentSelected() {
    return this.shipmentTypes[this.shipmentTypesValue];
  } 
    

  async send(){
    emailjs.init('xuIfiJPk-F6i1AR5B');

    let response = await emailjs.send("service_s7ct73v","template_ifqow11",{
      to_name: this.formularioCompra.value.nombre,
      to_lastname: this.formularioCompra.value.apellido,
      to_email: this.formularioCompra.value.email,
      to_telf: this.formularioCompra.value.telf,
      to_envio: this.typeDeliverie(),
      to_direccion: this.formularioCompra.value.direccion,
      to_provincia: this.formularioCompra.value.provincia,
      to_localidad: this.formularioCompra.value.localidad,
      to_city: this.formularioCompra.value.ciudad,
      to_codPostal: this.formularioCompra.value.codigoPostal,
      to_list: this.getListCartForEmail(),
      to_subtotal: this.total(),
      to_precioEnvio: this.priceDeliverySelected(),
      to_total: this.totalWithDeliveried(),
      reply_to: "pedidos@todoregalo.online",
    });
    
    swal({
      title: "Solicitud Enviada",
      text: "Su Pedido ha sido enviado, volverá a la tienda",
      icon: "success",
    });
  
    this.formularioCompra.reset();
    this.clearPedido();
    this.volverTienda();
  }

  formularioCompra = new FormGroup({
    nombre: new FormControl('', Validators.required),  
    apellido: new FormControl('', Validators.required),
    telf: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    emailNotification: new FormControl(''),
    envio: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    codigoPostal: new FormControl('', Validators.required),
    
  });

  clearPedido() {
    this.cartService.clearCart();
  };

  volverTienda(){
    this.router.navigate(['/tienda'])
  };

  typeDeliverie(){
    return this.shipmentSelected.title;
  }

  private getListCartForEmail() {
    return this.cart.map(item => `${item.product.title} x ${item.cant}u x $${item.product.price}/u`).join("\n");
  };

  priceDeliverySelected(){
   return this.shipmentSelected.priceWithDiscount;
  }

  changeLoading(){
    this.isLoading = (this.isLoading === !this.isLoading);
  }

  totalWithDeliveried(){
    return this.total() + this.shipmentSelected.priceWithDiscount;
   
  } 

}
