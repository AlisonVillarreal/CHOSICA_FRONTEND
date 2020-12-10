import { Injectable } from '@angular/core';
import { Cargo } from '../models/cargo';
import {Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import { Router } from '@angular/router';
import {catchError,  map} from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private cargoUrl:string = 'http://localhost:1144/Cargo';

  constructor(private http: HttpClient, private router:Router) { }
  
  getListarCargo():Observable<any>{
    return this.http.get(this.cargoUrl+'/all2').pipe(
      catchError(e =>{
        this.router.navigate(['/organo']);
        console.error(e.error.mensaje);
        Swal.fire('Error al listar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }
}