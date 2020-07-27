import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getUploadFiles () {
    return this.http.get('/backend/getFile.php');
  }

  updateLikes (fileId){
      
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    return this.http.post('/backend/buttonLikes.php', {id : fileId}, httpOptions);
  }
}
