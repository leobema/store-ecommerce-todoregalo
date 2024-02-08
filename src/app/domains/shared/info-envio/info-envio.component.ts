import { CommonModule } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CartService } from '../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-info-envio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLinkWithHref],
  templateUrl: './info-envio.component.html',
  styleUrl: './info-envio.component.css'
})

export class InfoEnvioComponent {

  cart;
  total;
  cartCount;
  
  private cartService = inject(CartService);
  
  constructor() {
    this.cart = this.cartService.cart;
    this.total = this.cartService.total;
    this.cartCount = this.cartService.cartCount;
  }
  


 /*  form: FormGroup = this.fb.group({

  })

  constructor(private fb: FormBuilder) {} */

  async send(){
    emailjs.init('xuIfiJPk-F6i1AR5B');
    let response = await emailjs.send("service_s7ct73v","template_ifqow11",{
      to_name: this.formularioCompra.value.nombre,
      to_lastname: this.formularioCompra.value.apellido,
      to_email: this.formularioCompra.value.email,
      to_telf: this.formularioCompra.value.telf,
      to_direccion: this.formularioCompra.value.direccion,
      to_provincia: this.formularioCompra.value.provincia,
      to_localidad: this.formularioCompra.value.localidad,
      to_city: this.formularioCompra.value.ciudad,
      to_codPostal: this.formularioCompra.value.codigoPostal,
      to_producto: this.formularioCompra.value.productos,
      to_cant: this.formularioCompra.value.cantidad,
      to_total: this.formularioCompra.value.total,
      reply_to: "pedidos@todoregalo.online",
      });
    
      alert("Su Pedido ha sido enviado, volverá a la tienda");
      this.formularioCompra.reset();
      this.clearPedido();
      this.volverTienda();
      
      
      
  }



  formularioCompra = new FormGroup({

    nombre: new FormControl('', Validators.required),  
    apellido: new FormControl('', Validators.required),
    telf: new FormControl('', [Validators.required, Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    emailNotification: new FormControl(''),
    direccion: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    localidad: new FormControl('', Validators.required),
    codigoPostal: new FormControl('', Validators.required),
    productos: new FormControl('', Validators.required),
    cantidad: new FormControl('', Validators.required),
    total: new FormControl('', Validators.required)
    
  });   

  clearPedido() {
      this.cartService.clearCart();
    };

  volverTienda(){
    location.href= "/tienda";
  }

}

