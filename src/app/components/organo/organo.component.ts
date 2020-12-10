import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-organo',
  templateUrl: './organo.component.html',
  styleUrls: ['./organo.component.css']
})
export class OrganoComponent implements OnInit {

  constructor(private cargoservice: CargoService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
    }
  listar(): void {
 
    this.cargoservice.getLista().subscribe(
      (data) => {
        console.log(data);
        this.cargoservice = data[0]['CUR_CARGO'];
        console.log("cargo ",  this.cargoservice);
      }, (err) => {
        console.log("Error en el listar-organo-component")
      }
    )
  }
}
