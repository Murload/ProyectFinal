import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

import { UserServiceService } from 'src/app/services/user/user-service.service'
import { users } from 'src/app/models/users';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fg : FormGroup;
  email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  numbers = /^([0-9])*$/;

  constructor( private NewUserService : UserServiceService, private fb : FormBuilder, private router : Router) {



    this.fg=this.fb.group({
      name: ['', Validators.required],
      lastname :['', Validators.required],
      email :['' ,[Validators.required, Validators.email]],
      telephone :['', [Validators.required, Validators.pattern('^[0-9]+$')]] ,
      password :['',Validators.required],
      role :['',Validators.required] 

    })

}

  ngOnInit(): void {
    this.ObtenerUser()
  }
  ObtenerUser(){
    this.NewUserService.getUser().subscribe(data=>{
      console.log(data);

    },error=>{
      console.log(error);
    })
  }

    NewUser(){
      const newusers: users = {
        name: this.fg.get('name')?.value,
        lastname: this.fg.get('lastname')?.value,
        email: this.fg.get('email')?.value,
        telephone: this.fg.get('telephone')?.value,
        password: this.fg.get('password')?.value,
        role: this.fg.get('role')?.value,
        
      }
      console.log(newusers);
      this.NewUserService.Newregister(newusers).subscribe( data => {
        this.router.navigate(['/login'])
      }, err => {
        console.log(err);
      } );
    }
  

}
