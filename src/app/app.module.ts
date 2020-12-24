/* //Import base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//Interceptor de jwt y verificación de auth
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

//Import de componente general
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';

//Import que se enviaran a modulo independiente
import { OrganoComponent } from './components/organo/organo.component';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component';
import { CargoService } from './services/cargo.service';
import { OrganizacionPersonaService } from './services/organizacion-persona.service';
import { PersonaService } from './services/persona.service';

@NgModule({

  imports: [BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    OrganoComponent,
    InformeComponent,
    SolicitudRegistroComponent
  ],
  
  providers: [
    CargoService,
    OrganizacionPersonaService,
    PersonaService,
   {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } */

//Import base
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
//Interceptor de jwt y verificación de auth
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';

//Import de componente general
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';

//Import que se enviaran a modulo independiente
import { OrganoComponent } from './components/organo/organo.component';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component';
import { CargoService } from './services/cargo.service';
import { OrganizacionPersonaService } from './services/organizacion-persona.service';
import { PersonaService } from './services/persona.service';
import { InicioComponent } from './components/template/inicio/inicio.component';
import { ListarComponent } from './components/organo/listar/listar.component';

@NgModule({

  imports: [BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    OrganoComponent,
    InformeComponent,
    SolicitudRegistroComponent,
    InicioComponent,
    ListarComponent
  ],
  
  providers: [
    CargoService,
    OrganizacionPersonaService,
    PersonaService,
   {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }