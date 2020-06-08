import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  // {
  //   path:"", 
  //   component:
  // },
  {
    path:"login", 
    component:LoginComponent 
  },
  {
    path:"create-user",
    component: CreateUserComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // todo: meter provider 
})
export class AppRoutingModule { }
