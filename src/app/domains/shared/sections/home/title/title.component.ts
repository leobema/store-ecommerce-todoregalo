import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-title',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {

}
