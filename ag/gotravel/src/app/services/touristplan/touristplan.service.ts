import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TouristplanService {
  url = 'http://127.0.0.1:3000/api/plan' 

  constructor( private http:HttpClient) {}


    getPlans():Observable<any>{
      return this.http.get(this.url)
    }

  
}
