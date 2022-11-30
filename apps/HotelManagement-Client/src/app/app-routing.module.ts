import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './modules/booking/components/gallery/gallery.component';
import { RoomBookingComponent } from './modules/booking/components/room-booking/room-booking.component';





import { HomeComponent } from './modules/core/components/home/home.component';
import { AppGuardGuard } from './modules/guards/app-guard.guard';
import { OperatorsComponent } from './modules/rxjs/operators/operators.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { RegisterComponent } from './modules/users/components/register/register.component';
import { UserProfileComponent } from './modules/users/components/user-profile/user-profile.component';

const routes: Routes = [
  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"booking/gallery",component:GalleryComponent},

  {path:'home',component:HomeComponent},
  {path:'booking', canActivate:[AppGuardGuard],component:RoomBookingComponent},
  {path:'user/profile/:id',canActivate:[AppGuardGuard],component:UserProfileComponent},
  {path: 'rxjs/operators', component:OperatorsComponent }

 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
