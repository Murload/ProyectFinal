import { Component, OnInit } from '@angular/core';


// services
import { UsersPrivTripsService } from 'src/app/services/entry/users-priv-trips.service';

import { PrivTrip } from '../../../../models/entry/PrivTrip';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {  Router } from '@angular/router';
import { Nannies } from '../../../../models/entry/Nannies';


// forms import
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-block-new-trip',
  templateUrl: './block-new-trip.component.html',
  styleUrls: ['./block-new-trip.component.css']
})
export class BlockNewTripComponent implements OnInit {

  onBlur(): void {
    // this.consultNannies();
    console.log('Blur');
  }

  // lists
  listPrivTrips: PrivTrip[] = [];
  listNanas: Nannies[] = [];

  // form
  newTripForm : FormGroup;
  yes = 0;
  numbers = /^([0-9])*$/;
  textoDeInput = '';


  // datos path




  constructor( private PrivService : UsersPrivTripsService,  private modal: NgbModal,
    private fb: FormBuilder, private privateService: UsersPrivTripsService,
    private router: Router ) {

      this.newTripForm = this.fb.group({
        name: ['', Validators.required],
        origin: ['', Validators.required],
        destiny: ['', Validators.required],
        date: ['', Validators.required],
        passengers: ['1', [Validators.required, Validators.pattern(this.numbers)]],
        budget: ['', [Validators.required, Validators.pattern(this.numbers)]],
        wishlist: [''],
        nannies: ['']
      });


    }

  ngOnInit(): void {

    this.consultPrivTrips();
  }

  consultPrivTrips() {
    this.PrivService.getPrivTrips().subscribe( data => {
      console.log(data);
      this.listPrivTrips = data;
    }, error => {
      console.log(error);
    } );
  }

  // open modal
  openLG(contenido: any) {
    this.modal.open(contenido, {size:'lg'});
  }

  // function 4 get and send data
  func(newtrip: any) {
    console.log('lista de datos');
    console.log(newtrip.name);

    this.newTripForm.patchValue(newtrip);

  }

  // methods
  editTrip() {
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

    this.privateService.putTrip(data_private).subscribe( data => {

    }, err => {
      console.log(err);
    } );


  }



}
