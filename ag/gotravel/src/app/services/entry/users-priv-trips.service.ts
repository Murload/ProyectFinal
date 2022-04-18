import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';

import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UsersPrivTripsService {

  url_api = 'http://localhost:3000/api/entry'
  url_apiC = 'http://localhost:3000/api/entry/current'
  url_apiPublic = 'http://localhost:3000/api/public'

  // Constructor
  constructor( private http:HttpClient, private logM: LoginService ) { }

  // Getters
  get token(): string {
    return localStorage.getItem('token')  || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    }
  }

  // Methods
  getPrivTrips( desde: number = 0 ): Observable<any> {
    const idus = this.logM.user._id;
    const url =  `${this.url_api}/${idus}/?desde=${ desde }`;
    return this.http.get( url, this.headers)

  }

  postNewTrip( newTrip: PrivTrip ): Observable<any> {

    const id = this.logM.user._id;
    return this.http.post(`${this.url_api}/${id}`, newTrip, this.headers);
  }

  putTrip( idtrip: string | null, trip: PrivTrip ): Observable<any> {
    const idus = this.logM.user._id;
    return this.http.put(`${this.url_api}/${idus}/${idtrip}`, trip, this.headers)
  }

  postPublicTrip( idpub: any, pub: Object): Observable<any> {

    const idus = this.logM.user._id;
    return this.http.put(`${this.url_apiPublic}/${idus}/${idpub}`, pub, this.headers);

  }






}
