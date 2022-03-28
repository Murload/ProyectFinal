import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';

@Injectable({
  providedIn: 'root'
})
export class UsersPrivTripsService {

  url_api = 'http://localhost:3000/api/entry'
  url_apiC = 'http://localhost:3000/api/entry/current'
  url_apiPublic = 'http://localhost:3000/api/public'

  constructor( private http:HttpClient ) { }

  getPrivTrips(): Observable<any> {
    return this.http.get(this.url_api);
  }

  postNewTrip( newTrip: PrivTrip ): Observable<any> {
    return this.http.post(this.url_api, newTrip);
  }

  putTrip( id: string | null, trip: PrivTrip ): Observable<any> {
    return this.http.put(`${this.url_api}/${id}`, trip)
  }

  postPublicTrip( id: any, pub: Object): Observable<any> {
    return this.http.put(`${this.url_apiPublic}/${id}`, pub)

  }




}
