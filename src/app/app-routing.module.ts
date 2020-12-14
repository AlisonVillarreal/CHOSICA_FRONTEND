import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component'
<<<<<<< HEAD
import { RevisarSolicitudComponent } from './components/revisar-solicitud/revisar-solicitud.component';


const routes: Routes = [
  {path: 'informe', component: InformeComponent},
  {path: 'solicitud-registro', component: SolicitudRegistroComponent},
  {path: 'revisar-solicitud', component: RevisarSolicitudComponent}
];
=======
import { OrganoComponent } from './components/organo/organo.component'
import { AuthGuard } from './_helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
>>>>>>> 0b79990e67d34884dc08848c826c285b45d1958b

  { path: '', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
//Considerar para cambiar componente por modulo
  { path: 'informe', component: InformeComponent, canActivate: [AuthGuard]},
  { path: 'solicitud-registro', component: SolicitudRegistroComponent, canActivate: [AuthGuard]},
  { path: 'organo', component: OrganoComponent,canActivate: [AuthGuard] },
//Redirección
  { path: '**', redirectTo: '' }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
