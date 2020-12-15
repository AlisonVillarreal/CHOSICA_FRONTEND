import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  opciones: object[]=null;
  grupos: object[]=null;
  user: any;
  constructor(
    private accountService: AccountService
  ) { 
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit(): void {
    this.menu();
  }
  logout(){
    this.accountService.logout();
  }
  menu():void{
    if (this.accountService.tokenValue) {
      this.grupos = this.user.grupos;
      this.opciones = this.user.accesos;
    }
  }
}
