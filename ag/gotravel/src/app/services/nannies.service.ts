import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NanniesService {

  urlApi = 'http://127.0.0.1:3000/api/nannies';
  urlID = 'http://127.0.0.1:3000/api/nannies/id';

  constructor(private http: HttpClient) { }

  getNannies(): Observable<any>{
    return this.http.get(this.urlApi)
  }

  getNanniesByCountry(count: String): Observable<any>{
    return this.http.get(`${this.urlApi}/${count}`)
  }

  getNanaById(id: any): Observable<any> {
    return this.http.get(`${this.urlID}/${id}`);
  }

}

