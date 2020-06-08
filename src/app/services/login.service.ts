import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { loginModel } from '../models/login';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser (user:loginModel) {
    console.log(user);

    const httpOptions = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
        
      })
    };
    
    return this.http.post('http://localhost/fuentes/Final-Web-1-master/backend/login.php',user,httpOptions);
  }
}
