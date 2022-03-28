import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NanniesidService {

  url_apiId = 'http://127.0.0.1:3000/api/nannies/id'

  constructor(private http: HttpClient) { }

    
getNanniesbyId(): Observable<any> {
  return this.http.get(this.url_apiId)
  }
  
}