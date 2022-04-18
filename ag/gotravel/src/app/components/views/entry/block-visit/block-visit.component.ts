import { Component, OnInit } from '@angular/core';
import { PopVisitService } from 'src/app/services/entry/pop-visit.service';

@Component({
  selector: 'app-block-visit',
  templateUrl: './block-visit.component.html',
  styleUrls: ['./block-visit.component.css']
})
export class BlockVisitComponent implements OnInit {

  arrayPop:any = [];

  constructor( private popPlaces : PopVisitService ) { }

  ngOnInit(): void {
    this.popPlaces.getPopularTrips()
      .subscribe( data => {
        // console.log(data);

        // this.arrayPop.push(data);
        // console.log(this.arrayPop);
      } )


  }

}
