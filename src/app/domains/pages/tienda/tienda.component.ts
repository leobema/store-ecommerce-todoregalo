import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ListComponent } from '../../products/pages/list/list.component';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ListComponent],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {

  
}

