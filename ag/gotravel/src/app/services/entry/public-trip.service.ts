import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrivTrip } from '../../models/entry/PrivTrip';

@Injectable({
  providedIn: 'root'
})
export class PublicTripService {

  url_api = 'http://localhost:3000/api/public'


  constructor( private http:HttpClient ) { }

  getAllPublic(): Observable<any>{
    return this.http.get(this.url_api);
  }

}
