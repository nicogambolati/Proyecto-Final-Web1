import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploadComponent } from './upload/upload.component';


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
  },
  {
    path:"upload",
    component: UploadComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // todo: meter provider 
})
export class AppRoutingModule { }
