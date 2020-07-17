import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'email', 'actions'];// las columnas que va a mostrar en la tabla
  dataSource: UserElement[]; 

  constructor(private userService: UserService) { }

  refreshUsers() {
    this.userService.getUsers().subscribe(result =>{
      this.dataSource = (result as object[]).map(user => (user as UserElement));
    });
  }

  ngOnInit() {
    this.refreshUsers();
  }

  disableUser(id){
    // console.log(id);
    this.userService.changeUserActive(id, false).subscribe(() => this.refreshUsers());
  }

  enableUser(id) {
    this.userService.changeUserActive(id, true).subscribe(() => this.refreshUsers());
  }
}

export interface UserElement {
  id: number;
  name: string;
  lastName: string;
  email: string;
  isActive: boolean;
}









