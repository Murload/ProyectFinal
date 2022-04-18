import { Component, OnInit } from '@angular/core';


// services
import { UsersPrivTripsService } from 'src/app/services/entry/users-priv-trips.service';

import { PrivTrip } from '../../../../models/entry/PrivTrip';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';
import { Nannies } from '../../../../models/entry/Nannies';

import { LoginService } from '../../../../services/login/login.service';


// forms import
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

// sweet alerts
import Swal from 'sweetalert2';


@Component({
  selector: 'app-block-new-trip',
  templateUrl: './block-new-trip.component.html',
  styleUrls: ['./block-new-trip.component.css']
})
export class BlockNewTripComponent implements OnInit {



  // lists
  listPrivTrips: any = [];
  listNanas: Nannies[] = [];

  // form
  putTripForm : FormGroup;
  yes = 0;
  numbers = /^([0-9])*$/;
  textoDeInput = '';



  // variables
  public desde: number = 0;
  public len: number | undefined = this.logM.user.privatetrips?.length;



  constructor( private PrivService : UsersPrivTripsService,  private modal: NgbModal,
    private fb: FormBuilder,
    private router: Router,
    private logM: LoginService ) {

      this.putTripForm = this.fb.group({
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

    this.consultPrivTrips();

  }

  consultPrivTrips( ) {
    this.PrivService.getPrivTrips( this.desde )
    .subscribe( data => {
      this.listPrivTrips = data;
    }, error => {
      console.log(error);
    } );

  }




// cambiar página
changePage( valor: number ) {
    this.desde += valor;
    console.log(this.len);
    if( this.desde < 0 ) {

      this.desde = 0;

    } else if ( this.desde > (this.len || 0) ){
      this.desde -= valor;

    }

    this.consultPrivTrips();

  }


  // open modal
  openLG(contenido: any) {
    this.modal.open(contenido, {size:'lg'});

  }

  // function 4 get and send data
  getID(newtrip: any) {

    console.log(localStorage.getItem("id_trip"));

    return localStorage.setItem("id_trip", newtrip);

  }

  getData(newtrip: any) {
    this.putTripForm.patchValue(newtrip);
  }

  // methods


  editTrip() {



    const data_private: PrivTrip = {
      name: this.putTripForm.get('name')?.value,
      origin: this.putTripForm.get('origin')?.value,
      destiny: this.putTripForm.get('destiny')?.value,
      startDate: this.putTripForm.get('startDate')?.value,
      endDate: this.putTripForm.get('endDate')?.value,
      passengers: this.putTripForm.get('passengers')?.value,
      budget: this.putTripForm.get('budget')?.value,
      wishlist: this.putTripForm.get('wishlist')?.value,
      // nannies: this.putTripForm.get('nannies')?.value,

    }
    console.log(localStorage.getItem("id_trip"));

    this.PrivService.putTrip(localStorage.getItem("id_trip"), data_private).subscribe( data => {
      Swal.fire({
        icon: 'success',
        iconColor: '#00FEB8',
        title: 'Se actualizó este viaje!',
        text: 'Volverás a la página principal.',
        showCloseButton: true,
        confirmButtonText:'Vale!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigateByUrl('/sesion');
          // this.consultPrivTrips();
        }
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        iconColor: '#00FEB8',
        title: 'Error!',
        text: 'No se pudo crear el viaje, intenta nuevamente',
        showCloseButton: true,
        confirmButtonText:'Vale!'
      });
    } )



    // console.log( data_private );
  }







}
