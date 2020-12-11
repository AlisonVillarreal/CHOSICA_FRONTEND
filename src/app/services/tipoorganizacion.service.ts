import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TipoorganizacionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private tiporganizacionUrl:string = 'http://localhost:1144/tiporganizacion';
 
    constructor(private http: HttpClient, private router:Router) {}
  
    getListarTipOrganizacion():Observable<any>{
      return this.http.get(this.tiporganizacionUrl+'/listar2').pipe(
        catchError(e =>{
          console.error(e.error.mensaje);
          Swal.fire('Error al listar', e.error.mensaje, 'error');
          return throwError(e);
        })
      )
    }
}
