import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register ={
    brand : "SKY TRIP",
    img : "../assets/img/planet.png",

  }

  constructor() { }

  ngOnInit(): void {
  }

}
