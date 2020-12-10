import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component'
import { OrganoComponent } from './components/organo/organo.component'

const routes: Routes = [
  {path: 'informe', component: InformeComponent},
  {path: 'solicitud-registro', component: SolicitudRegistroComponent},
  {path: 'organo', component: OrganoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
