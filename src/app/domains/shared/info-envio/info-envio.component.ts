import { CommonModule } from '@angular/common';
import { Component, NgModule, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { CartService } from '../services/cart.service';
import { Router, RouterLinkWithHref } from '@angular/router';
import swal from 'sweetalert'

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
  
  isLoading = true;
  
  private cartService = inject(CartService);
  
  constructor(private router: Router) {
    this.cart = this.cartService.getAll();
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
      to_list: this.getListCartForEmail(),
      to_total: this.total(),
      reply_to: "pedidos@todoregalo.online",
    });
    
    swal({
      title: "Solicitud Enviada",
      text: "Su Pedido ha sido enviado, volverá a la tienda",
      icon: "success",
    });
    //alert("Su Pedido ha sido enviado, volverá a la tienda");
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
    
  });

  clearPedido() {
    this.cartService.clearCart();
  };

  volverTienda(){
    this.router.navigate(['/tienda'])
  };

  private getListCartForEmail() {
    return this.cart.map(item => `${item.product.title} x ${item.cant}`).join("\n");
  };

  changeLoading(){
    this.isLoading = (this.isLoading === !this.isLoading)
  }

  

}
