import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// import { FormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Nannies } from '../../../../models/entry/Nannies';

import { UsersPrivTripsService } from 'src/app/services/entry/users-priv-trips.service';

import { PrivTrip } from '../../../../models/entry/PrivTrip';

import {  Router } from '@angular/router';



@Component({
  selector: 'app-form-newtrip',
  templateUrl: './form-newtrip.component.html',
  styleUrls: ['./form-newtrip.component.css']
})


export class FormNewtripComponent implements OnInit {


  // para ingresar country
  textoDeInput = '';

  // variables
  newTripForm : FormGroup;
  yes = 0;
  listNanas: Nannies[] = [];
  numbers = /^([0-9])*$/;



  constructor( private fb: FormBuilder, private privateService: UsersPrivTripsService,
    private router: Router) {


    this.newTripForm = this.fb.group({
      name: ['', Validators.required],
      origin: ['', Validators.required],
      destiny: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      passengers: ['1', [Validators.required, Validators.pattern(this.numbers)]],
      budget: ['', [Validators.required, Validators.pattern(this.numbers)]],
      wishlist: [''],
      // nannies: ['']
    });



  }



  ngOnInit(): void {

  }

  // methods


  addNewTrip() {



    const data_private: PrivTrip = {
      name: this.newTripForm.get('name')?.value,
      origin: this.newTripForm.get('origin')?.value,
      destiny: this.newTripForm.get('destiny')?.value,
      startDate: this.newTripForm.get('startDate')?.value,
      endDate: this.newTripForm.get('endDate')?.value,
      passengers: this.newTripForm.get('passengers')?.value,
      budget: this.newTripForm.get('budget')?.value,
      wishlist: this.newTripForm.get('wishlist')?.value,
      // nannies: this.newTripForm.get('nannies')?.value,

    }


    this.privateService.postNewTrip(data_private).subscribe( data => {
      Swal.fire({
        icon: 'success',
        iconColor: '#00FEB8',
        title: 'Viaje Creado Correctamente!',
        text: 'Volverás a la página principal donde verás tu nuevo viaje.',
        showCloseButton: true,
        confirmButtonText:'Vale!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/sesion');
        }
      })
    }, err => {
      Swal.fire({
        icon:'error',
        iconColor: '#00FEB8',
        title: 'Error!',
        text: 'No se pudo crear el viaje, intenta nuevamente',
        showCloseButton: true,
        confirmButtonText:'Vale!'
      });
    } );




  }

  // consultNannies() {
  //   this.nanaServ.getNanaCountry({ "country": "colombia" }).subscribe( data => {
  //     console.log(this.textoDeInput);
  //     // this.listNanas = data;

  //   }, error => {
  //     console.log(error);
  //   } );
  // }





}
