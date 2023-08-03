import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  showLargeLogo = false;

  constructor() {
    this.updateViewportWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateViewportWidth(event.target.innerWidth);
  }

  updateViewportWidth(width: number) {
    this.showLargeLogo = width >= 1000;
  }
}
