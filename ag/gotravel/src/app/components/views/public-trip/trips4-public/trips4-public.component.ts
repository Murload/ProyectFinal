import { Component, OnInit } from '@angular/core';

import { UsersPrivTripsService } from 'src/app/services/entry/users-priv-trips.service';
import { PrivTrip } from '../../../../models/entry/PrivTrip';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// sweet alerts
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trips4-public',
  templateUrl: './trips4-public.component.html',
  styleUrls: ['./trips4-public.component.css']
})
export class Trips4PublicComponent implements OnInit {

  listPrivTrips: PrivTrip[] = [];
  resp = {};

  constructor( private PrivService : UsersPrivTripsService,  private modal: NgbModal ) { }

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


  publicT(idpost: any) {

    // console.log(idpost);
    localStorage.setItem("id4post", idpost);
    Swal.fire({
      title: '¿Estas seguro de publicar este viaje?',
      text: "Los demás usuarios podrán ver algunos datos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'De acuerdo'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("confirmPublic", "true");
        this.resp = {"resp":  localStorage.getItem("confirmPublic")};
        console.log(this.resp);
        this.PrivService.postPublicTrip(localStorage.getItem("id4post"), this.resp ).subscribe( data => {
          console.log(data);
        }, err => {
          console.log(err);
        } );
        Swal.fire(
          'Publicado!',
          'Se ha publicado tu viaje!',
          'success'
        )
      } else {
        localStorage.setItem("confirmPublic", "false");
      }
    })

  }





}
