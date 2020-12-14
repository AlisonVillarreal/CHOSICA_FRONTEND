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
  
  addSolicitudOrganizacion(soli : Solicitud_Fucion): Observable<number>{
    return this.http.post<number>(`${environment.apiUrl}/add`, soli);
  }
}
