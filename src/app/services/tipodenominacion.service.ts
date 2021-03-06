import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipodenominacionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private tipodenominancionURL:String = `${environment.apiUrl}tipodenominaciones`;

  constructor(private http:HttpClient, private router:Router) {}

getListarTipoDenominaciones():Observable<any>{
  return this.http.get(`${environment.apiUrl}/tipodenominaciones/listar2`).pipe(
    catchError(e =>{
      console.error(e.error.mensaje);
      Swal.fire('Error al listar', e.error.mensaje, 'error');
      return throwError(e);
    })
    )
  }
}
