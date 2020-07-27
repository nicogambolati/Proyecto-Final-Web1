import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'XDXDXD';
  pageTitle = '';
  isUserLogged: boolean;

  constructor (
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
  ) { 
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.pageTitle = route.data.title || '';

        this.isUserLogged = !!this.authService.getAuth();
      }
    });
  }

  confirmLogout() {
    this.dialog
    .open(ConfirmDialogComponent, {
      data: '¿Está seguro que desea cerrar sesión?'
    }).afterClosed()
    .subscribe((accepted: Boolean) => {
      if (accepted) {
        this.authService.deleteAuth();
        this.router.navigate(['/login']);
      }
    });
  }

}
