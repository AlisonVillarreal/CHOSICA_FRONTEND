import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizacionPersonaService } from 'src/app/services/organizacion-persona.service';
import { Cargo } from 'src/app/models/cargo';
import { CargoService } from 'src/app/services/cargo.service';
import { OrganizacionPersona } from 'src/app/models/organizacion-persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listarpersona: any;
  cargo:any;
  numero_doc: String; id_cargo: number;
  organoModel: OrganizacionPersona = new OrganizacionPersona();

  constructor(private organoservice: OrganizacionPersonaService, private cargoservice: CargoService,
    private router: Router ) { }

  ngOnInit(): void {
    this.listar();
    this.listarcargos();
  }

  listar(): void{
    this.organoservice.getalison().subscribe(
      (datos)=>{ console.log(datos)
        this.listarpersona= datos[0]['CUR_DIFERENTE']
        console.log(datos[0]['CUR_DIFERENTE'])
      }
    )
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
  setorgano(alison:any){
    this.organoModel.id_cargo = alison.ID_CARGO;
    
  }
}
