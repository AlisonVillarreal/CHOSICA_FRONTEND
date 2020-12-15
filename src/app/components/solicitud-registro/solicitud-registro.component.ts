import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Solicitud_Fucion } from 'src/app/models/solicitud-organizacion';
import { Tipodenominacion } from 'src/app/models/tipodenominacion';
import { SolicitudOrganizacionService } from 'src/app/services/solicitud-organizacion.service';
import { TipodenominacionService } from 'src/app/services/tipodenominacion.service';
import { TipoorganizacionService } from 'src/app/services/tipoorganizacion.service';
import { AccountService } from 'src/app/services/account.service'
import swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-solicitud-registro',
  templateUrl: './solicitud-registro.component.html',
  styleUrls: ['./solicitud-registro.component.css']
})
export class SolicitudRegistroComponent implements OnInit {

  archivitos : File;
  usuario: Usuario;
  tiporganizacion : any;
  tipodenominacion: any;
  tipodenoModel:  Tipodenominacion [];
  solicitudModel: Solicitud_Fucion = new Solicitud_Fucion();

  constructor(private tipoorganizacionService: TipoorganizacionService,
              private tipodenominacionService: TipodenominacionService,
              private solicitudOrganizacion: SolicitudOrganizacionService,
              private usuarioService: AccountService,
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
        this.tipodenoModel = datos[0]['CUR_TIPO_DENOMINACION'];
      },(err)=>{
        console.log("Error en el listar Tipo Denominaciones")
      }
    )
  }

  actualizararchivo(e:File){
    this.archivitos = e [0];
    console.log(this.archivitos);
  }

  agregarSolicitud(): void{

    this.solicitudOrganizacion.crearArchivo(this.archivitos).subscribe();
    /* this.usuario = this.usuarioService.getuser();
    var fecha = this.solicitudModel.fec_iniactv.split("-");
    this.solicitudModel.fec_iniactv = fecha[2] + "/" + fecha [1] + "/" + fecha [0];
    console.log(this.solicitudModel.fec_iniactv);
    console.log(this.solicitudModel, this.usuario.id_usuario);
    this.solicitudOrganizacion.addSolicitudOrganizacion(this.solicitudModel, this.usuario.id_usuario).subscribe(
      response=>{
        swal.fire({
          icon: 'success',
          title: 'Solicitud Enviada',
          text: 'Tu Solicitud de Organización a sido enviada correctamente'
        })
      }
    ) */
  } 
}
