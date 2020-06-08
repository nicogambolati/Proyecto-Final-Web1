import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from "@angular/forms";
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm = new FormGroup (
    {
      name:new FormControl(""), 
      lastName: new FormControl(""), 
      email: new FormControl(""), 
      password: new FormControl("")
    })
  constructor (private userService: UserService)
  { 
    
  }



  ngOnInit() {
  }

  onSubmit()
  {
    const user = new  UserModel()
    user.name = this.createUserForm.value.name;
    user.lastName = this.createUserForm.value.lastName;
    user.email = this.createUserForm.value.email;
    user.password = this.createUserForm.value.password;   
    
      this.userService.createUser(user);
  }

}
