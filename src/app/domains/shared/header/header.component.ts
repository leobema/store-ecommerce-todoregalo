import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleMenu = false
  

  
    

/*
implements OnInit {
  ngOnInit() {
    document.addEventListener('click', this.closeMenu)
  }

  openMenu() {
    const menu = document.getElementById("menu-user");
    if (!menu) {
      return;
    }

    menu.classList.remove('hidden');
  }

  closeMenu(e: any) {
    const menuContainer = document.getElementById("menu-user-container");
    const menu = document.getElementById("menu-user");
    
    if (!menuContainer) {
      return;
    }

    if (!menu) {
      return;
    }

    if (!menuContainer.contains(e.target)) {
      menu.classList.add('hidden');
    }
  }
  */
}


