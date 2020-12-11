import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccountRoutingModule
    
  ],
  declarations: [
    LayoutComponent,
    LoginComponent, 
    RegisterComponent
    ]
})
export class AccountModule { }
