import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileUserService {

  constructor(private http:HttpClient, private authService: AuthenticationService) { }

  getProfileUser(){
    const userId = this.authService.getAuth();
    return this.http.get('/backend/profileUser.php?userId=' + userId);
  }
}

