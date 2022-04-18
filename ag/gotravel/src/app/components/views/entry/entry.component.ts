import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor( private logM: LoginService ) { }

  ngOnInit(): void {

    Swal.fire({
      title: `¡Bienvenid@! ${ this.logM.user.name }`,
      toast: true,
      timer: 2500,
      background: '#00D8E3',
      showConfirmButton: false,
      color: 'white',
      position: 'top-end'
    });

  }

}
