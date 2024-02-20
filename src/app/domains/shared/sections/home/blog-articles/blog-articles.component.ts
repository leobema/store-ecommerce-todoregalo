import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-blog-articles',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './blog-articles.component.html',
  styleUrl: './blog-articles.component.css'
})
export class BlogArticlesComponent {

}
