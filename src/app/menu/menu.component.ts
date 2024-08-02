import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isUserMenuOpen = false;
  isEventMenuOpen = false;
  isMenuOpen = false;

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  toggleEventMenu() {
    this.isEventMenuOpen = !this.isEventMenuOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
