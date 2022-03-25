import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Nannie } from 'src/app/models/nannies';
import { Country } from 'src/app/models/search-nannies';
import { SearchNanniesService } from 'src/app/services/search-nannies.service'; 


@Component({
  selector: 'app-search-nannies',
  templateUrl: './search-nannies.component.html', 
  styleUrls: ['./search-nannies.component.css']
})
export class SearchNanniesComponent implements OnInit {

  nanniesList : FormGroup;
  nannyCountry: Nannie[] = [];

  constructor(private fb: FormBuilder , private nannieServ: SearchNanniesService) { 
    this.nanniesList = this.fb.group({
     country: ['', Validators.required] 
    })
  }

  ngOnInit(): void {
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
