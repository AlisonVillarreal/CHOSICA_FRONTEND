import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud_Fucion } from 'src/app/models/solicitud-organizacion';
import { SolicitudOrganizacionService } from 'src/app/services/solicitud-organizacion.service';
import { TipodenominacionService } from 'src/app/services/tipodenominacion.service';
import { TipoorganizacionService } from 'src/app/services/tipoorganizacion.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-registro',
  templateUrl: './solicitud-registro.component.html',
  styleUrls: ['./solicitud-registro.component.css']
})
export class SolicitudRegistroComponent implements OnInit {

  tiporganizacion : any;
  tipodenominacion: any;
  solicitudModel: Solicitud_Fucion = new Solicitud_Fucion();

  constructor(private tipoorganizacionService: TipoorganizacionService,
              private tipodenominacionService: TipodenominacionService,
              private solicitudOrganizacion: SolicitudOrganizacionService,
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

  agregarSolicitud(): void{
    this.solicitudOrganizacion.addSolicitudOrganizacion(this.solicitudModel).subscribe(
      response=>{
        swal.fire({
          icon: 'success',
          title: 'Solicitud Enviada',
          text: 'Tu Solicitud de Organización a sido enviada correctamente'
        })
      }
    )
  }
}
