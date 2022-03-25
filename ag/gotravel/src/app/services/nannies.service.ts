import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NanniesService {

  urlApi = 'http://127.0.0.1:3000/api/nannies';

  constructor(private http: HttpClient) { }

  getNannies(): Observable<any>{
    return this.http.get(this.urlApi)
  }
}
