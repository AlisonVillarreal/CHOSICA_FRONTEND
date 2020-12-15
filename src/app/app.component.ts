import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './models/usuario';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opciones: object[]=null;
  grupos: object[]=null;
  title = 'template-app';
  nombre: string;
  token: string;
  user: any;

  constructor(
    private accountService: AccountService,
    private router: Router
    ) {
    this.token = this.accountService.tokenValue;
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }
  ngOnInit(): void {
    this.menu();
    this.router.navigate(['inicio']);
    
  }
  logout(){
    this.accountService.logout();
  }
  menu():void{
  if (this.accountService.tokenValue) {
    this.grupos = this.user.grupos;
    this.opciones = this.user.accesos;
    this.nombre = this.user.usuario
  }
  }
}
