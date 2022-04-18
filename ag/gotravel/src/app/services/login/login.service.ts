import { Injectable, NgZone } from '@angular/core';

import { tap, map, catchError } from 'rxjs/operators'


import { HttpClient } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { LoginForm } from './login-form.interface';
import { Router } from '@angular/router';
import { users } from '../../models/users';



// const base_url = environment.base_url;

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url_api = 'http://localhost:3000/api/log'




  constructor( private http:HttpClient, private router: Router,
    private ngZone: NgZone) {

    this.googleInit();
  }
  public user: users = new users;




  public auth2: any;

  googleInit() {
    gapi.load('auth2', () =>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '932223652525-n4p6e9i3am079vae4i2t2l5el1001d7g.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
    });
  }

  validateToken(): Observable<boolean> {
    const token = localStorage.getItem('token') || '';

    return this.http.get(`${this.url_api}/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap( (resp: any) => {

        const {_id ,name, lastname, email,
          password, telephone, role, privatetrips  } = resp.usLog;

        this.user = new users(  _id,
          name, lastname, email, '', telephone, role, privatetrips
        );



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

  logout() {
    localStorage.removeItem('token');
    this.auth2.signOut().then( () => {

      this.ngZone.run(() => {
        this.router.navigateByUrl('/');

      } )
    });
  }


}
