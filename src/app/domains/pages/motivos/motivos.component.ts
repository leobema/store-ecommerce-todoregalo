import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motivos',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './motivos.component.html',
  styleUrl: './motivos.component.css'
})
export class MotivosComponent {

}
