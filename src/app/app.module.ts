import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomBookingComponent } from './modules/room-booking/room-booking.component';
import { MembershipComponent } from './modules/shared/components/membership/membership.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomBookingComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
