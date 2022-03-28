import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class PublicTripService {

  url_api = 'http://localhost:3000/api/public'


  constructor( private http:HttpClient, private logM: LoginService  ) { }



  getAllPublic(): Observable<any>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(this.url_api,{
      headers: {
        'x-token': token
      }
    });
  }

}
