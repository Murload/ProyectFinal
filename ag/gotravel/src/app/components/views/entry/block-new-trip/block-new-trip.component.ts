import { Component, OnInit } from '@angular/core';


// services
import { UsersPrivTripsService } from 'src/app/services/entry/users-priv-trips.service';

import { PrivTrip } from '../../../../models/entry/PrivTrip';


@Component({
  selector: 'app-block-new-trip',
  templateUrl: './block-new-trip.component.html',
  styleUrls: ['./block-new-trip.component.css']
})
export class BlockNewTripComponent implements OnInit {

  constructor( private PrivService : UsersPrivTripsService ) { }

  listPrivTrips: PrivTrip[] = [];



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



}
