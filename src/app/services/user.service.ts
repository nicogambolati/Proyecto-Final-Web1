import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({   //hace que sea injectable para el injector de dependencia
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

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
}


