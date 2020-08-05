import { Component } from '@angular/core';
import { Router, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AuthenticationService } from './services/authentication.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PICCLUB';
  pageTitle = '';
  isUserLogged: Boolean;
  isUserAdmin: Boolean;
  

  searchFormControl = new FormControl('', Validators.required);

  constructor (
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthenticationService,
  ) { 
    // Se ejecuta en cada ruta que el usuario visita.
    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.pageTitle = route.data.title || '';

        this.isUserLogged = !!this.authService.getAuth();
        this.isUserAdmin = this.authService.isActiveUserAdmin();
        
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
        this.authService.deleteIsAdmin();
        this.router.navigate(['/login']);
      }
    });
  }

  search() {
    if(this.searchFormControl.value){
      this.router.navigateByUrl('/searchResult?q=' + this.searchFormControl.value);
    }else {
      this.router.navigateByUrl('/dashboard');
    }
  }

  searchOnEnter(event: KeyboardEvent) {
    if (event.code === 'NumpadEnter' || event.code === 'Enter') {
      this.search();
    }
  }
}
