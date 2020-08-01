import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteImageService {

  constructor(private http:HttpClient) { }

  deleteFile (fileId){
    return this.http.get("/backend/deleteFile.php?fileId="+fileId);
  }
}
