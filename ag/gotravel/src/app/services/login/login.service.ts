import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_api = 'http://localhost:3000/api/login'

  constructor( private http:HttpClient ) { }

  userAuth(): Observable<any> {
    return this.http.get(this.url_api);
  }
}
