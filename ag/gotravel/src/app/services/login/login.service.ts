import { Injectable } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators'

import { environment } from 'src/environments/environment';

import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';
import { LoginForm } from './login-form.interface';

// const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_api = 'http://localhost:3000/api/log'

  constructor( private http:HttpClient ) { }


  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.url_api}/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {
        localStorage.setItem('token', resp.token)
    }),
    map( resp => true),
    catchError( error  => of(false) )
    );



  }


  login( formData: LoginForm ): Observable<any> {
    console.log(formData);
    return this.http.post(this.url_api, formData)
          .pipe(
            tap( (resp: any) => {
              localStorage.setItem('token', resp.token)
            } )
          )
  }

  loginGoogle( token: any ): Observable<any> {
    return this.http.post(`${this.url_api}/google`, { token })
          .pipe(
            tap( (resp: any) => {
              localStorage.setItem('token', resp.token)
            } )
          )
  }



}
