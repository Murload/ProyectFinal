import { Component, OnInit } from '@angular/core';

// import { FormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrivTrip } from 'src/app/models/entry/PrivTrip';
import { UsersPrivTripsService } from '../../../../services/entry/users-priv-trips.service';




@Component({
  selector: 'app-form-newtrip',
  templateUrl: './form-newtrip.component.html',
  styleUrls: ['./form-newtrip.component.css']
})


export class FormNewtripComponent implements OnInit {

  newTripForm : FormGroup;

  yes = 0;


  numbers = /^([0-9])*$/;


  constructor( private fb: FormBuilder, private privateService: UsersPrivTripsService, private router: Router) {

    this.newTripForm = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      destiny: ['', Validators.required],
      date: ['', Validators.required],
      passengers: ['1', [Validators.required, Validators.pattern(this.numbers)]],
      budget: ['', [Validators.required, Validators.pattern(this.numbers)]],
      wishlist: [''],
      nannies: ['']
    })

  }

  ngOnInit(): void {
  }

  // methods
  addNewTrip() {
    console.log(this.newTripForm);

    const data_private: PrivTrip = {
      name: this.newTripForm.get('name')?.value,
      origin: this.newTripForm.get('origin')?.value,
      destiny: this.newTripForm.get('destiny')?.value,
      date: this.newTripForm.get('date')?.value,
      passengers: this.newTripForm.get('passengers')?.value,
      budget: this.newTripForm.get('budget')?.value,
      wishlist: this.newTripForm.get('wishlist')?.value,
      nannies: this.newTripForm.get('nannies')?.value,
    }

    console.log(data_private);
    this.privateService.postNewTrip(data_private).subscribe( data => {
      this.router.navigate(['/sesion']);
    }, err => {} );

  }



}
