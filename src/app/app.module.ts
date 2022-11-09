import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { HomeComponent } from './modules/core/components/home/home.component';

//import { RoomBookingComponent } from './modules/booking/components/room-booking.component';
import { MembershipComponent } from './modules/shared/components/membership/membership.component';
import { GalleryComponent } from './modules/booking/components/gallery/gallery.component';
import { BookingModule } from './modules/booking/booking.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MembershipComponent,
    GalleryComponent,
         ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
