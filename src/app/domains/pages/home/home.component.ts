import { CommonModule, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { HeaderComponent } from './../../shared/header/header.component'
import { TitleComponent } from '../../shared/sections/home/title/title.component';
import { FeaturedProductsComponent } from '../../shared/sections/home/featured-products/featured-products.component';
import { BlogArticlesComponent } from '../../shared/sections/home/blog-articles/blog-articles.component';
import { PaymentComponent } from '../../info/payment/payment.component';
import { FooterComponent } from '../../shared/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, HeaderComponent, TitleComponent, FeaturedProductsComponent, BlogArticlesComponent, PaymentComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 
  

  }


