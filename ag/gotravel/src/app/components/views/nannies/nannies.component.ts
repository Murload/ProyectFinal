import { Component, OnInit } from '@angular/core';
import { Nannie } from 'src/app/models/nannies';
import { NanniesService } from 'src/app/services/nannies.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nannies',
  templateUrl: './nannies.component.html',
  styleUrls: ['./nannies.component.css']
})
export class NanniesComponent implements OnInit {

  name: string = '';
  lastName: string ='';
  country: string = '';
  bornCountry: string= '';
  age: number = 0;
  description: string  = '';
  price: number = 0;
  experience: string = '';
  criminalRecord: boolean = false;
  phone: number = 0;


  nannyList: Nannie[] = [];
  nannyCountry: Nannie[] = []; 

  nanniesList : FormGroup;


constructor(private _nanniesServices: NanniesService, private fb: FormBuilder , private modal: NgbModal) { 

  this.nanniesList = this.fb.group({
    country: ['', Validators.required]  
    });

  }



  ngOnInit(): void {
      this.showNanniesByCountry();

  }
  
  openLG(contenido: any, id: any) {
    this.modal.open(contenido, {size:'lg'});
    // console.log(id);
    
    localStorage.setItem("id_nana", id);

    console.log(localStorage.getItem("id"));
  }
  
  showNanniesById(){
    this._nanniesServices.getNanaById(localStorage.getItem("id_nana")).subscribe( data => {
      this.name = data.name;
      this.lastName = data.lastName;
      this.country = data.country;
      this.bornCountry = data.bornCountry;
      this.age = data.age;
      this.price = data.price;
      this.experience = data.experience;
      this.criminalRecord = data.criminalRecord;
      this.description = data.description;
      this.phone = data.phone;


      // console.log(this.name);
    }, error => {
      console.log(error);
    });
  }
  
    showNanniesByCountry(){
      const country: string = this.nanniesList.get('country')?.value

        this._nanniesServices.getNanniesByCountry(country).subscribe(data=>{
          console.log("esto es data",data);
          this.nannyCountry = data;
          console.log("esta es nannycountry", this.nannyCountry);

        } , err => {
          console.log(err);
        } );
    

    }


    
  }

