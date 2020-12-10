import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { OrganoComponent } from './components/organo/organo.component';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component';
import { CargoService } from './services/cargo.service';
import { OrganizacionPersonaService } from './services/organizacion-persona.service';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
