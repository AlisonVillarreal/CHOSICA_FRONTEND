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
private usuariosURL:string = `${environment.apiUrl}/usuarios`;
  constructor
    (    
      private http: HttpClient,
      private router: Router
      
    ) { 
      this._token = sessionStorage.getItem('token');
      this._usuario = JSON.parse(sessionStorage.getItem('user')) as Usuario;
    }
  
  public get tokenValue(): any{
    if (this._token) {
      return this._token
    }
    return null;
  }
  public get userValue(): any{
    if (this._usuario) {
      return this._usuario
    }
    return null;
  }

  //Registro de Usuario y Persona
  registrosol(params: any) {
    return this.http.post(this.usuariosURL + '/registrosol', params);
  }
  registro(params: any) {
    return this.http.post(this.usuariosURL + '/usuarios/registro', params);
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
    return this.http.get(this.usuariosURL + '/lista');
  }
  getAll(): Observable<any>{
    return this.http.get(this.usuariosURL + '/lista');
  }
  getById(id: number){
    return this.http.get(`${this.usuariosURL}/${id}`);
  }
  getRoles(): Observable<Rol>{
    return this.http.get<Rol>(`${environment.apiUrl}/roles/listar`);
  } 
  delete(id: number){
    return this.http.delete(`${this.usuariosURL}/${id}`);
  }
  updUsuario(id: string, usuario: Usuario){
    return this.http.put(`${this.usuariosURL}/edit/${id}`, usuario);
  }
  activacion(id: string){
    return this.http.get(`${this.usuariosURL}/activacion/${id}`);
  }
  //Funciones adicionales de token
  guadarUser(accesToken: string):void{
    let payload = this.obtenerDatosToken(accesToken);
    this._usuario = new Usuario(); 
    this._usuario.id_usuario = payload.iduser;
    this._usuario.usuario = payload.user;
    this._usuario.nombre = payload.nombre;
    this._usuario.rol = payload.authorities;
    this._usuario.grupos = payload.grupos;
    this._usuario.accesos = payload.accesos;  
    
    sessionStorage.setItem('user',JSON.stringify(this._usuario));
  }
  guadarToken(accesToken: string):void{
    this._token = accesToken;
    sessionStorage.setItem('token',this._token);
  }
  obtenerDatosToken(accessToken:string):any{
    if(accessToken!=null){
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }
  getuser(): Usuario{
    return this._usuario;
  }
  hasRole(role: string): boolean {
    if (this._usuario.rol === role) {
      return true;
    }
    return false;
  }
}
