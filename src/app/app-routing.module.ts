import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploadComponent } from './upload/upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoggedUserGuard } from './guards/logged-user.guard';
import { ProfileUserComponent } from './profile-user/profile-user.component';


const routes: Routes = [
  {
    path: "login",
    data: {
      title: "Login"
    },
    component:LoginComponent
  },
  {
    path:"create-user",
    data: {
      title: "Nuevo Usuario"
    },
    component: CreateUserComponent
  },
  {
    path:"upload",
    data: {
      title: "Subir Imagen"
    },
    component: UploadComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path:"dashboard",
    data: {
      title: "Inicio"
    },
    component: DashboardComponent,
    canActivate: [LoggedUserGuard]
  },
  {
    path:"admin",
    data: {
      title: "Administrador"
    },
    component: AdminComponent,
    canActivate: [LoggedUserGuard] // Needs to check if user is Adminstrator.
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile-user',
    data: {
      title: "Perfil de Usuario"
    },
    component: ProfileUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
