import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template-app';
  token: string;

  constructor(private accountService: AccountService) {
    this.token = this.accountService.tokenValue;
  }
  
  logout() {
    this.accountService.logout();
 }
}
