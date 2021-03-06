import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    // tslint:disable-next-line: variable-name
    private _router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {

  }

  signIn(credentials) {
    this.authService.login(credentials)
    .subscribe(result => {
      if (result)
        this._router.navigate(['/']);
      else
        this.invalidLogin = true;
    });
  }

}
