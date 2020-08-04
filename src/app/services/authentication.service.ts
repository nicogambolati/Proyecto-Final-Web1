import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const COOKIE_NAME = 'authToken';
const COOKIE_ADMIN = 'isAdmin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private cookieService: CookieService) { }

  setAuth(value: string) {
    this.cookieService.set(COOKIE_NAME, value);
  }

  getAuth(): string {
    return this.cookieService.get(COOKIE_NAME);
  }

  deleteAuth() {
    this.cookieService.delete(COOKIE_NAME);
  }
  
  setIsAdmin(isAdmin: string) {
    this.cookieService.set(COOKIE_ADMIN, isAdmin === '1' ? "true" : "false");
  }

  isActiveUserAdmin() : Boolean {
    return this.cookieService.get(COOKIE_ADMIN) === "true";
  }

  deleteIsAdmin() {
    this.cookieService.delete(COOKIE_ADMIN);
  }
}
