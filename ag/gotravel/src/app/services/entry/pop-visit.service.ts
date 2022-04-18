import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopVisitService {



  url_api = 'http://localhost:3000/api/consult'

  constructor( private http: HttpClient ) { }

  getPopularTrips(): Observable<any> {
    return this.http.get( this.url_api );
  }

}
