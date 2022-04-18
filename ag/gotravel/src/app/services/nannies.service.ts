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
    const token = localStorage.getItem('token') || '';
    return this.http.get(this.urlApi, {
      headers: {
        'x-token': token
      }
    })
  }

  getNanniesByCountry(count: String): Observable<any>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${this.urlApi}/${count}`,{
      headers: {
        'x-token': token
      }
    })
  }

  getNanaById(id: any): Observable<any> {

    const token = localStorage.getItem('token') || '';
    return this.http.get(`${this.urlApi}/id/${id}`,{
      headers: {
        'x-token': token
      }
    });
  }

}
