import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient) {
  }

  login(credentials) {
    return this.http.post('/api/authenticate', credentials).pipe(
      map(
        (response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            return true;
          }
          return false;
        },
        err => {
          return false;
        }
      )
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    // return !jwtHelper.isTokenExpired();

    const token = localStorage.getItem('token');
    if (!token) return false;

    // const expirationDate = jwtHelper.getTokenExpirationDate(token);
    const isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  isAdmin() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const decode = new JwtHelperService().decodeToken(token);
    return decode.admin;
  }
}
