import { Injectable } from '@angular/core';
import { OrganizacionPersona } from '../models/organizacion-persona';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import { environment } from '../../environments/environment'
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class OrganizacionPersonaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
 

  constructor(private http: HttpClient, private router:Router) { }

  getLista():Observable<any>{
    return this.http.get(environment.apiUrl +'/persona/listar2').pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error al buscar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  getBuscarDocu(documento: String):Observable<any>{
    return this.http.get(environment.apiUrl +'/orgaper/buscar/'+ documento).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error al buscar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  updCargo(nombre_doc: String, id_cargo: number):Observable<any>{
    return this.http.put(environment.apiUrl +'/persona/updcargo/'+ nombre_doc + '/' + id_cargo,{}).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error al buscar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  
}
