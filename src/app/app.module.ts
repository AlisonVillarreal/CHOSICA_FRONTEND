import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 3eb959f1f38fe092a3959585da857fb2e1d853e3

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MenuComponent } from './components/template/menu/menu.component';
<<<<<<< HEAD
=======
import { LoginComponent } from './components/login/login.component';
import { OrganoComponent } from './components/organo/organo.component';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component';
import { CargoService } from './services/cargo.service';
import { OrganizacionPersonaService } from './services/organizacion-persona.service';
import { PersonaService } from './services/persona.service';
>>>>>>> 3eb959f1f38fe092a3959585da857fb2e1d853e3

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
<<<<<<< HEAD
    MenuComponent
  ],
  
  providers: [
   {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
=======
    MenuComponent,
    LoginComponent,
    OrganoComponent,
    InformeComponent,
    SolicitudRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CargoService,
              OrganizacionPersonaService,
              PersonaService],
>>>>>>> 3eb959f1f38fe092a3959585da857fb2e1d853e3
  bootstrap: [AppComponent]
})
export class AppModule { }
