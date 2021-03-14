import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarListComponent {
  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
  }
}
