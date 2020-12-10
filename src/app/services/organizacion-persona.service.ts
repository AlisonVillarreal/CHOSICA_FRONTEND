import { Injectable } from '@angular/core';
import { OrganizacionPersona } from '../models/organizacion-persona';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class OrganizacionPersonaService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private organoUrl:string = 'http://localhost:1144/OrganizacionPersona';

  constructor(private http: HttpClient, private router:Router) { }

  getLista():Observable<any>{
    return this.http.get(this.organoUrl+'/all').pipe(
      catchError(e =>{
        this.router.navigate(['/organo']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
  
}
