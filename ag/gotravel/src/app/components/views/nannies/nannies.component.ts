import { Component, OnInit } from '@angular/core';
import { Nannie } from 'src/app/models/nannies';
import { NanniesService } from 'src/app/services/nannies.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from 'src/app/models/search-nannies';
import { SearchNanniesService } from 'src/app/services/search-nannies.service'; 


@Component({
  selector: 'app-nannies',
  templateUrl: './nannies.component.html',
  styleUrls: ['./nannies.component.css']
})
export class NanniesComponent implements OnInit {

  nannyList: Nannie[] = [];
  nanniesList : FormGroup;
  nannyCountry: Nannie[] = [];

 
constructor(private _nanniesServices: NanniesService, private fb: FormBuilder , private nannieServ: SearchNanniesService) { 

  this.nanniesList = this.fb.group({
    country: ['', Validators.required]  
   });

 }



  ngOnInit(): void {
      this.showNanniesByCountry()
  }
  
  
    showNannies(){
      this._nanniesServices.getNannies().subscribe(data => {
        console.log(data);
        this.nannyList = data
      }, error => {
        console.log(error)
      })
    }

    showNanniesByCountry(){
      const country: string = this.nanniesList.get('country')?.value

        this.nannieServ.getNanniesByCountry(country).subscribe(data=>{
          console.log(data);
          this.nannyCountry = data;
        } , err => {
          console.log(err);
        } );
      
    }
  }




  

  


//    
