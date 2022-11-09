import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

<<<<<<< HEAD
=======

>>>>>>> 50ff13c45ab7803d2d291c467cdc0c8b7da95db0
import { HomeComponent } from './components/home/home.component';
import { MembershipComponent } from '../shared/components/membership/membership.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../users/components/login/login.component';
import { RegisterComponent } from '../users/components/register/register.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
<<<<<<< HEAD
=======

>>>>>>> 50ff13c45ab7803d2d291c467cdc0c8b7da95db0
  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembershipComponent,
    LoginComponent,
    RegisterComponent
<<<<<<< HEAD
=======

>>>>>>> 50ff13c45ab7803d2d291c467cdc0c8b7da95db0
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule
  ]
})
export class CoreModule { }
