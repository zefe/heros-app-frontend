import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-hero'},
    { label: 'Buscar', icon: 'search', url: './search'},
    { label: 'Tablas', icon: 'table', url: './table'},
    { label: 'Pivot', icon: 'settings', url: './pivot'},
  ]

  constructor( 
    private authService: AuthService,
    private router: Router
    ) {}

  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }

}
