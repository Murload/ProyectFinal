import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private useServ: LoginService,
    private router: Router ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {


      return this.useServ.validateToken()
        .pipe(
          tap( isAuth => {

            if ( !isAuth ) {
              this.router.navigateByUrl('/login');
            }

          } )
        );
  }

}
