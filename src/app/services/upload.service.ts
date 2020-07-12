import { Injectable } from '@angular/core';
import { UploadFileModel } from '../models/uploadFile';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { format } from 'url';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(uploadFile: UploadFileModel) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*',
      })
    };

    const formData = new FormData();
    formData.append('userId', uploadFile.userId.toString());
    formData.append('file', uploadFile.file);
    formData.append('description', uploadFile.description);

    // console.log("usuario: ", user);
    
    return this.http.post('/backend/newuser.php', uploadFile, httpOptions);
  }
}
