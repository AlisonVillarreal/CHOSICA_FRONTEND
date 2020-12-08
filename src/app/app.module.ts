import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { OrganoComponent } from './components/organo/organo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    OrganoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
