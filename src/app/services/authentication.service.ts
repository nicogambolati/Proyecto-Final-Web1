import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const COOKIE_NAME = 'authToken';

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

  deleteAuth(){
    this.cookieService.delete(COOKIE_NAME);
  }
}
