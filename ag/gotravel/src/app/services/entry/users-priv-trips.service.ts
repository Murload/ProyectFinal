import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';

@Injectable({
  providedIn: 'root'
})
export class UsersPrivTripsService {

  url_api = 'http://localhost:3000/api/entry'

  constructor( private http:HttpClient ) { }

  getPrivTrips(): Observable<any> {
    return this.http.get(this.url_api);
  }

  postNewTrip( trip: PrivTrip ): Observable<any> {
    return this.http.post(this.url_api, trip);
  }

}