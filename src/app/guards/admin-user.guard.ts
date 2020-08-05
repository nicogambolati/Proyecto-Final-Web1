import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserGuard implements CanActivate {
  constructor(
    private authSerice: AuthenticationService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this.authSerice.isActiveUserAdmin() as boolean;

    if (!isAdmin) {
      this.router.navigate(['/dashboard']);
    }

    return isAdmin;
  }
  
}
