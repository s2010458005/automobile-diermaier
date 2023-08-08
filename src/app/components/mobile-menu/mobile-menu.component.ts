import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  showMenu: boolean = false;

  hamburgerIcon = 'assets/icons/hamburger-menu.jpg';
  closeIcon = 'assets/icons/close.png';
  icon = this.hamburgerIcon;

  normalLogo = 'assets/logo/logo-small-white.png';
  transparentLogo = 'assets/logo/logo-small-transparent.png';
  logo = this.normalLogo;

  constructor(private renderer: Renderer2) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.icon == this.hamburgerIcon) {
      this.icon = this.closeIcon;
      this.renderer.addClass(document.body, 'prevent-scroll');
    } else {
      this.icon = this.hamburgerIcon;
      this.renderer.removeClass(document.body, 'prevent-scroll');
    }

    if (this.logo == this.normalLogo) {
      this.logo = this.transparentLogo;
    } else {
      this.logo = this.normalLogo;
    }
    console.log(this.icon);
    console.log(this.showMenu);
  }

  clickLogo() {
    // if (this.showMenu) {
    //   this.showMenu = false;
    // }

    this.toggleMenu();
  }
}
