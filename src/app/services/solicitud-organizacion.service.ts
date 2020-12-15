import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Solicitud_Fucion } from '../models/solicitud-organizacion';
import Swal from 'sweetalert2';
import {catchError,  map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolicitudOrganizacionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});

  constructor(private http: HttpClient, private router:Router) { }
  
  addSolicitudOrganizacion(soli : any, id : number): Observable<number>{
    soli.id_usuariosol = id;
    return this.http.post<number>(`${environment.apiUrl}/solicitud/add`, soli);
  }
  crearArchivo(archivo: File): any{
    const formData = new FormData();
    const nombre = archivo.name;
    formData.append("archivo", archivo);
    formData.append("nombre", nombre);
    return this.http.post(`${environment.apiUrl}/archivos/create`, formData)
  }
}
