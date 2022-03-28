import { Component, OnInit } from '@angular/core';
import { PrivTrip } from 'src/app/models/entry/PrivTrip';

import { PublicTripService } from 'src/app/services/entry/public-trip.service';


@Component({
  selector: 'app-other-trips',
  templateUrl: './other-trips.component.html',
  styleUrls: ['./other-trips.component.css']
})
export class OtherTripsComponent implements OnInit {

  listPubTrips: PrivTrip[] = [];

  constructor( private PubServ : PublicTripService ) { }

  ngOnInit(): void {
    this.getPublicTrip();
  }


  getPublicTrip() {
    this.PubServ.getAllPublic().subscribe( data => {
      // console.log(data);
      this.listPubTrips = data;
      console.log(this.listPubTrips);
    }, error => {
      console.log(error);
    } );
  }


}
