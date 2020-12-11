import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TipodenominacionService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private tipodenominancionURL:String = 'http://localhost:1144/tipodenominaciones';

  constructor(private http:HttpClient, private router:Router) {}

getListarTipoDenominaciones():Observable<any>{
  return this.http.get(this.tipodenominancionURL+'/listar2').pipe(
    catchError(e =>{
      console.error(e.error.mensaje);
      Swal.fire('Error al listar', e.error.mensaje, 'error');
      return throwError(e);
    })
    )
  }
}
