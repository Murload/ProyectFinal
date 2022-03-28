import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NanaAllService {

  url_api = 'http://localhost:3000/api/nannies'
  url_apiCountry = 'http://127.0.0.1:3000/api/nannies/country'


  constructor( private http:HttpClient ) { }

  getAllNannies(): Observable<any> {
    return this.http.get(this.url_api);
  }



}
