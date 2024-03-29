
import { Component, effect } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { TitleComponent } from '../../shared/sections/home/title/title.component';
import { FeaturedProductsComponent } from '../../shared/sections/home/featured-products/featured-products.component';
import { BlogArticlesComponent } from '../../shared/sections/home/blog-articles/blog-articles.component';
import { PaymentComponent } from '../../info/payment/payment.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLinkWithHref, TitleComponent, FeaturedProductsComponent, BlogArticlesComponent, PaymentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    
  

  }


