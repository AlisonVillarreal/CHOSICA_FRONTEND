import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import { environment } from '../../environments/environment'
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private cargoUrl:string = `${environment.apiUrl}/Cargo`;

  constructor(private http: HttpClient, private router:Router) { }
  
  getListarCargo():Observable<any>{
    return this.http.get(`${environment.apiUrl}/Cargo/all2`).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        Swal.fire('Error al listar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }
  
}