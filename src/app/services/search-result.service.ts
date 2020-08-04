import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  constructor(private http:HttpClient) { }

  search (searchTerm: string) {
    return this.http.get('/backend/search.php?q=' + searchTerm);
  }
}
