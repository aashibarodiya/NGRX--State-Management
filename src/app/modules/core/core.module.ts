import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

<<<<<<< HEAD

=======
>>>>>>> 78e7dfde54a1790aa3f0b1876a70831f074cde93
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


>>>>>>> 78e7dfde54a1790aa3f0b1876a70831f074cde93
  
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembershipComponent,
    LoginComponent,
    RegisterComponent
<<<<<<< HEAD
=======

>>>>>>> 78e7dfde54a1790aa3f0b1876a70831f074cde93
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersModule
  ]
})
export class CoreModule { }