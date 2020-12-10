import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { OrganizacionPersona } from 'src/app/models/organizacion-persona';
import { CargoService } from 'src/app/services/cargo.service';
import { OrganizacionPersonaService } from 'src/app/services/organizacion-persona.service';

@Component({
  selector: 'app-organo',
  templateUrl: './organo.component.html',
  styleUrls: ['./organo.component.css']
})
export class OrganoComponent implements OnInit {

  organo: any;
  organoModel: OrganizacionPersona = new OrganizacionPersona();
  cargo: any;
  cargoModel: Cargo = new Cargo();

  constructor(private cargoservice: CargoService,
              private organoservice: OrganizacionPersonaService,
              private router: Router) {}

  ngOnInit(): void {
    this.listarcargos();
  }

  listarcargos(): void{
    this.cargoservice.getListarCargo().subscribe(
      (datos)=>{
        console.log(datos[0]['CUR_CARGO']);
        this.cargo = datos[0]['CUR_CARGO'];
      },(err)=>{
        console.log("Error en el Organo listar")
      }
    )
  }
}
