import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpUserService } from './services/http-user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,


  ]
})
export class UsersModule { }
