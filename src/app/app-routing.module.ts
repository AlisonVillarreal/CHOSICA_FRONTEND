import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';

import { AuthGuard } from './_helpers/auth.guard';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [

  { path: '', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  { path: '**', redirectTo: '' }
=======
import { InformeComponent } from './components/informe/informe.component';
import { SolicitudRegistroComponent } from './components/solicitud-registro/solicitud-registro.component'
import { OrganoComponent } from './components/organo/organo.component'

const routes: Routes = [
  {path: 'informe', component: InformeComponent},
  {path: 'solicitud-registro', component: SolicitudRegistroComponent},
  {path: 'organo', component: OrganoComponent }
>>>>>>> 3eb959f1f38fe092a3959585da857fb2e1d853e3
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
