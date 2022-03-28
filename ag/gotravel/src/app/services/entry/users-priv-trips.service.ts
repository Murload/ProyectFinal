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



  constructor( private http:HttpClient, private logM: LoginService ) { }




  getPrivTrips( ): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const id = this.logM.user._id;
    return this.http.get(`${this.url_api}/${id}`, {
      headers: {
        'x-token': token
      }
    });
  }

  postNewTrip( newTrip: PrivTrip ): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const id = this.logM.user._id;
    return this.http.post(`${this.url_api}/${id}`, newTrip, {
      headers: {
        'x-token': token
      }
    });
  }

  putTrip( idtrip: string | null, trip: PrivTrip ): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const idus = this.logM.user._id;
    return this.http.put(`${this.url_api}/${idus}/${idtrip}`, trip, {
      headers: {
        'x-token': token
      }
    })
  }

  postPublicTrip( idpub: any, pub: Object): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const idus = this.logM.user._id;
    return this.http.put(`${this.url_apiPublic}/${idus}/${idpub}`, pub, {
      headers: {
        'x-token': token
      }
    });

  }




}
