import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  promosBancarias(){
    swal({
      title: "Medios de pago para este producto",
      text: "Por el momento solo aceptamos medios de pago como transferencias y efectivo. Estamos trabajando para aceptar mas medios de pagos.",   
    });
    }


  tarjetasDebito(){
  swal({
    title: "Medios de pago para este producto",
    text: "Por el momento solo aceptamos medios de pago como transferencias y efectivo. Estamos trabajando para aceptar mas medios de pagos.",   
  });
}

  efectivo(){
  swal({
    title: "Efectivo",
    text: "Si te encuentras en Mendoza podés realizar el pago en efectivo.",   
  });
}

  masMediosDePagos(){
  swal({
    title: "Otros medios de pago",
    text: "Por el momento solo aceptamos medios de pago como transferencias y efectivo. Estamos trabajando para aceptar mas medios de pagos.",   
  });
}

}
