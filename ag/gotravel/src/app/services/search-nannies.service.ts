import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchNanniesService {

  // urlApiCountry = 'http://127.0.0.1:3000/api/nannies/?country=';
  urlApiCountry = 'http://localhost:3000/api/nannies';

  constructor(private http: HttpClient) { }
  
  getNanniesByCountry(count: String): Observable<any>{
    return this.http.get(`${this.urlApiCountry}/${count}`)
  }

}