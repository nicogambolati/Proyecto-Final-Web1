import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import { loginModel } from '../models/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserForm = new FormGroup(
    {
      email:new FormControl(""),
      password: new FormControl("")
    })


  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    const login = new loginModel()
    login.email = this.loginUserForm.value.email;
    login.password = this.loginUserForm.value.password;
  
    this.loginService.loginUser(login).subscribe(Response=>console.log(Response));
  }
 
}
