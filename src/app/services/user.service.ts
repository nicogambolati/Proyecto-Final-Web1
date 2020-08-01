import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({   //hace que sea injectable para el injector de dependencia
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private authService: AuthenticationService) { }

  createUser (user: UserModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    // console.log("usuario: ", user);
    
    return this.http.post('/backend/newuser.php', user, httpOptions);
  }

  getUsers(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    return this.http.get('/backend/getUser.php');
  }

  changeUserActive(userId: Number, isActive: Boolean) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    const body = {
      userId,
      isActive: isActive ? '1' : '0'
    };

    return this.http.post('/backend/disableUser.php', body, httpOptions);
  }

  getActiveUser(){
    const userId = this.authService.getAuth();
    return this.http.get("/backend/profileUser.php/?userId="+userId);

  }

  deleteUser (userID){
    return this.http.get("/backend/deleteUser.php?userId="+userID);
  }


}


