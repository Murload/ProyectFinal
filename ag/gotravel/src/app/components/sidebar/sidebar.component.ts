import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private userServ: LoginService ) { }

  ngOnInit(): void {
  }


  logout() {
    this.userServ.logout();
  }

  process() {
    Swal.fire({
      title: 'En construcción!',
      text: 'Esta Sección se encuentra en Desarrollo.',
      imageUrl: '../../../assets/img/programacion-web.png',
      imageWidth: 128,
      imageHeight: 128,
      imageAlt: 'Custom image',
    })
  }

}
