import { Component, OnInit } from '@angular/core';
import { first, toArray } from 'rxjs/operators';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  usuarios = null;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  this.listaUsers();
  }

  listaUsers(){
    this.accountService.getAll()
    .pipe(first())
    .subscribe(
      (res) => {
        this.usuarios = res[0]['CUR_USUARIOS'];
      }
      ,
      error => {console.log(error)});
  }

  deleteUser(id: number) {
    const user = this.usuarios.find(x  => x.id === id);
    //user.isDeleting = true;
    this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => this.usuarios = this.usuarios.filter(x => x.id !== id));
    this.listaUsers();
}
}
