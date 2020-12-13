import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment'
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

private _usuario: Usuario;
private _token: string;

  constructor
    (    
      private http: HttpClient,
      private router: Router
      
    ) { 
      this._token = sessionStorage.getItem('token');
    }
  
  public get tokenValue(): any{
    if (this._token) {
      return this._token
    }
    return null;
  }

  //Registro de Usuario y Persona
  registrosol(params: any) {
    return this.http.post(`${environment.apiUrl}/usuarios/registrosol`, params);
  }
  registro(params: any) {
    return this.http.post(`${environment.apiUrl}/usuarios/registro`, params);
  }
  //Logeo | Usa otro header, propio del server
  login(usuario: string, clave: string): Observable<any> {
    const loginEndpoint = `${environment.apiUrl}/oauth/token`;
    const credenciales = btoa('angularapp' + ':' + '1234567');
    const httpHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization':'Basic ' + credenciales});

      let params = new URLSearchParams();
      params.set('grant_type','password');
      params.set('username',usuario);
      params.set('password',clave);

    return this.http.post(loginEndpoint, params.toString(), {headers: httpHeaders});
  }
  //Eliminar el usuario activo
  logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }
  getAllU(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/usuarios/lista`);
  }
  getAll(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/usuarios/lista`);
  }
  getById(id: number){
    return this.http.get(`${environment.apiUrl}/usuarios/${id}`);
  }
  getRoles(): Observable<Rol>{
    return this.http.get<Rol>(`${environment.apiUrl}/roles/listar`);
  } 
  delete(id: number){
    return this.http.delete(`${environment.apiUrl}/usuarios/${id}`);
  }
  updUsuario(id: string, usuario: Usuario){
    return this.http.put(`${environment.apiUrl}/usuarios/edit/${id}`, usuario);
  }
  //Funciones adicionales de token
  guadarUser(accesToken: string):void{
    let payload = this.obtenerDatosToken(accesToken);
    this._usuario = new Usuario(); 
    this._usuario.id_usuario = payload.iduser;
    this._usuario.usuario = payload.user;  
    sessionStorage.setItem('user',JSON.stringify(this._usuario));
  }
  guadarToken(accesToken: string):void{
    this._token = accesToken;
    sessionStorage.setItem('token',accesToken);
  }
  obtenerDatosToken(accessToken:string):any{
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

}
