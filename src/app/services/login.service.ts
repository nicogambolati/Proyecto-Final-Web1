import { Injectable } from '@angular/core';
import { loginModel } from '../models/login';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser (user:loginModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    return this.http.post('/backend/login.php', user, httpOptions);
  }
}
