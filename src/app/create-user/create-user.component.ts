import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, RequiredValidator, Validators} from "@angular/forms";
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  user = new UserModel();
  createUserForm: FormGroup;

  ngOnInit() : void {
    this.createUserForm = new FormGroup (
      {
        name:new FormControl(this.user.name, Validators.required), 
        lastName: new FormControl(this.user.lastName, Validators.required),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
      });
  }

  constructor (
    private userService: UserService,
    private router: Router
  ) {}

  onCancel() {
    this.router.navigate(["/home"]);
  }  

  onSubmit() {
    if (this.createUserForm.invalid) {
      console.log("Error en el form");
    } else {
      this.user.name = this.createUserForm.value.name;
      this.user.lastName = this.createUserForm.value.lastName;
      this.user.email = this.createUserForm.value.email;
      this.user.password = this.createUserForm.value.password;   
      
      this.userService.createUser(this.user)
        .subscribe(response => {
          console.log(response);
          if (response) {
            // TODO: Save cookie and redirect to Dashboard.
            this.router.navigate(['login']);
          } else {
            console.error("No tenemos respuesta.");
          }
        });
    }
  }

  get name() { return this.createUserForm.get('name'); }
  get lastName() { return this.createUserForm.get('lastName'); }
  get email() { return this.createUserForm.get('email'); }
  get password() { return this.createUserForm.get('password'); }
}
