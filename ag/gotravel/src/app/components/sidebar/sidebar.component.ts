import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';

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

}
