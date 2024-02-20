import { Component } from '@angular/core';
import { ListCategoriesComponent } from '../../products/pages/list-categories/list-categories.component';
import { RouterLinkWithHref } from '@angular/router';
import moment from 'moment';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ListCategoriesComponent, RouterLinkWithHref],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  annio(){
  return moment().format('YYYY');
  }
  

}
