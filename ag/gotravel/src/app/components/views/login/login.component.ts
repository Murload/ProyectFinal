import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service';
import Swal from 'sweetalert2';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  loginForm : FormGroup;

  constructor( private fb: FormBuilder,
    private router: Router, private logServ: LoginService,
    private ngZone: NgZone) {

      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
        role: ['', Validators.required],

      });

    }




  ngOnInit(): void {

    this.renderButton();
  }


  login(){
    this.logServ.login( this.loginForm.value )
      .subscribe( data => {

        this.router.navigateByUrl('/sesion');

      }, (err)=>{
        Swal.fire('Error', err.error.msg, 'error');
      });

  };


  // login google
  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });

    this.startApp();

  }

  startApp () {
    gapi.load('auth2', () =>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.auth2 = gapi.auth2.init({
        client_id: '932223652525-n4p6e9i3am079vae4i2t2l5el1001d7g.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('my-signin2'));
    });
  };

  attachSignin(element: any) {
    this.auth2.attachClickHandler(element, {},
        (googleUser: any) => {
          const id_token = googleUser.getAuthResponse().id_token;
          this.logServ.loginGoogle( id_token )
            .subscribe( data => {
              this.ngZone.run(() => {
                this.router.navigateByUrl('/sesion');

              } )

            });
            // navigate sesion

        }, (error: any) => {
          alert(JSON.stringify(error, undefined, 2));
        });
  }


}
