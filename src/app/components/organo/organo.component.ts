import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Cargo } from 'src/app/models/cargo';
import { OrganizacionPersona } from 'src/app/models/organizacion-persona';
import { CargoService } from 'src/app/services/cargo.service';
import { OrganizacionPersonaService } from 'src/app/services/organizacion-persona.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-organo',
  templateUrl: './organo.component.html',
  styleUrls: ['./organo.component.css']
})
export class OrganoComponent implements OnInit {
  listapersonas: any;
  organo: any;
  organoModel: OrganizacionPersona = new OrganizacionPersona();
  cargo: any;
  cargoModel: Cargo = new Cargo();
  numero_doc: String; id_cargo: number;

  constructor(private cargoservice: CargoService,
              private organoservice: OrganizacionPersonaService,
              private router: Router) {}

  ngOnInit(): void {
    this.listarcargos();
    this.listar();
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
  listardocumento(documento: String): void{
    this.organoservice.getBuscarDocu(documento).subscribe(
      (datos)=>{ console.log(datos)
        console.log(datos['CUR_PERSONA'])
      }
    )
  }
  listar(): void{
    this.organoservice.getLista().subscribe(
      (datos)=>{ console.log(datos)
        this.listapersonas= datos[0]['CUR_PERSONA']
        console.log(datos[0]['CUR_PERSONA'])
      }
    )
  }
  updCargo(): void{
    var numero_doc = this.numero_doc;
    var id_cargo = this.id_cargo;
    console.log(numero_doc, id_cargo)
    this.organoservice.updCargo(numero_doc, id_cargo).subscribe(
      (datos)=>{ 
        this.listar();
      swal.fire({
        icon: 'success',
        title: 'Solicitud Enviada',
        text: 'La persona se agrego correctamente'
      })}
    )
  }
}
