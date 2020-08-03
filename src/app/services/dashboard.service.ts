import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginModel } from '../models/login';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService) { }

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

  sendComment(fileId, comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    const userId = this.authService.getAuth();

    return this.http.post('/backend/addComment.php', {fileId, comment, userId}, httpOptions);
  }
}
