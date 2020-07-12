import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from "@angular/forms";
import { loginModel } from '../models/login';
import { LoginService } from '../services/login.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserForm = new FormGroup(
    {
      email:new FormControl("", [Validators.required,Validators.email]),
      password: new FormControl("", [Validators.required,Validators.minLength(3)])
    })

  constructor(
    private loginService: LoginService,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginUserForm.invalid) {
      console.log("formulario es incorrecto");

    } else{
      const login = new loginModel()
      login.email = this.loginUserForm.value.email;
      login.password = this.loginUserForm.value.password;
      
      this.loginService.loginUser(login).subscribe(response => {
        this.authService.setAuth(response.userId)
        // console.log(response);
      });
    }
  }

  get email() {
    return this.loginUserForm.get('email');
  }

  get password() {
    return this.loginUserForm.get('password');
  }
 
}
