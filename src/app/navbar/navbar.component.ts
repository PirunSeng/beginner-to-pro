import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn = false;
  isAdmin = false;

  constructor(
    public authService: AuthService
  ) {
    this.isLoggedIn();
    this.checkIsAdmin();
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.loggedIn = false;
  }

  isLoggedIn() {
    this.loggedIn = this.authService.isLoggedIn();
  }

  checkIsAdmin() {
    this.isAdmin = this.authService.isAdmin();
  }
}
