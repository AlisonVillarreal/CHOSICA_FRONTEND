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
  private cargoUrl:string = 'http://localhost:9191/Cargo';


  constructor(private http: HttpClient, private router:Router) { }
  
  getLista():Observable<any>{
    return this.http.get(this.cargoUrl+'/all').pipe(
      catchError(e =>{
        this.router.navigate(['/Cargo']);
        console.error(e.error.mensaje);
        Swal.fire('Error al editar', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }
}
