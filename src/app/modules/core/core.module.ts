import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

<<<<<<< HEAD
=======

>>>>>>> 0a15bbbc21ebd52f02639fa98e8d303df8518bf8
import { HomeComponent } from './components/home/home.component';
import { MembershipComponent } from '../shared/components/membership/membership.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../users/components/login/login.component';
import { RegisterComponent } from '../users/components/register/register.component';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
<<<<<<< HEAD
 
    HeaderComponent,
    FooterComponent,
    
    HomeComponent
=======
  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembershipComponent,
    LoginComponent,
    RegisterComponent
>>>>>>> 0a15bbbc21ebd52f02639fa98e8d303df8518bf8
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule
  ]
})
export class CoreModule { }
