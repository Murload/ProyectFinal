import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nannies } from '../../models/entry/Nannies';

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

  // getNanaCountry( cont: Object ): Observable<any> {
  //   return this.http.get(this.url_apiCountry, cont);
  // }

}
