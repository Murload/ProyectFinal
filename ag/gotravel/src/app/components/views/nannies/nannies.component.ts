import { Component, OnInit } from '@angular/core';
import { Nannie } from 'src/app/models/nannies'; 
import { NanniesService } from 'src/app/services/nannies.service';

@Component({
  selector: 'app-nannies',
  templateUrl: './nannies.component.html',
  styleUrls: ['./nannies.component.css']
})
export class NanniesComponent implements OnInit {

  nannyList: Nannie[] = []

  constructor(private _nanniesServices: NanniesService) { }

  ngOnInit(): void {
    this.showNannies()
  }


  showNannies(){
    this._nanniesServices.getNannies().subscribe(data => {
      console.log(data);
      this.nannyList = data
    }, error => {
      console.log(error)
    })
  
  }


}  
