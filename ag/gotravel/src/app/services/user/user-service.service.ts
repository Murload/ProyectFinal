import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { tap } from 'rxjs';
// import { JwtResponseI } from 'src/app/models/jwt-response-i';
import { users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'http://localhost:3000/api/newuser';


  constructor(private http:HttpClient) { }


  getUser():Observable<any>{
    return this.http.get(this.url)
  }

  Newregister( user : users ): Observable<any>{
    return this.http.post(this.url, user);
  }
}
