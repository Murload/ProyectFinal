import { Component, OnInit } from '@angular/core';
import { Tourimsplan } from 'src/app/models/PlanTouris';
import { TouristplanService } from 'src/app/services/touristplan/touristplan.service';
@Component({
  selector: 'app-tourist-plan',
  templateUrl: './tourist-plan.component.html',
  styleUrls: ['./tourist-plan.component.css']
})
export class TouristPlanComponent implements OnInit {
  listTourismplan : Tourimsplan []=[]
  
  constructor( private tourismService : TouristplanService ) { }



  ngOnInit(): void {
    this.getPlans()
  }
  getPlans(){
    this.tourismService.getPlans().subscribe(data =>{
      // console.log(data);
      this.listTourismplan = data;
      console.log(this.listTourismplan);
    },error =>{
      console.log(error);
    })

  }

}
