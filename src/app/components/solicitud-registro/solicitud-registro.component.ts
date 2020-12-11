import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipodenominacionService } from 'src/app/services/tipodenominacion.service';
import { TipoorganizacionService } from 'src/app/services/tipoorganizacion.service';

@Component({
  selector: 'app-solicitud-registro',
  templateUrl: './solicitud-registro.component.html',
  styleUrls: ['./solicitud-registro.component.css']
})
export class SolicitudRegistroComponent implements OnInit {

  tiporganizacion : any;
  tipodenominacion: any;

  constructor(private tipoorganizacionService: TipoorganizacionService,
              private tipodenominacionService: TipodenominacionService,
              private router: Router) { }

  ngOnInit(): void {
    this.listarTipoOrganizacion();
    this.listarTipoDenominaciones();
  }

  listarTipoOrganizacion(): void{
    this.tipoorganizacionService.getListarTipOrganizacion().subscribe(
      (datos)=>{
        console.log(datos[0]['CUR_TIPO_ORGANIZACION']);
        this.tiporganizacion = datos[0]['CUR_TIPO_ORGANIZACION'];
      },(err)=>{
        console.log("Error en la solicitud-registro Listar Tipo de Organizaciones")
      }
    )
  }

  listarTipoDenominaciones():void{
    this.tipodenominacionService.getListarTipoDenominaciones().subscribe(
      (datos)=>{
        console.log(datos[0]['CUR_TIPO_DENOMINACION']);
        this.tipodenominacion = datos[0]['CUR_TIPO_DENOMINACION'];
      },(err)=>{
        console.log("Error en el listar Tipo Denominaciones")
      }
    )
  }
}
