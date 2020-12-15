import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
        {path: 'login', component: LoginComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'activacion/:id', component: ConfirmationComponent}
              ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
