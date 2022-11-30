import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpUserService } from './modules/users/services/http-user-service';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from '../app/modules/Store/simple.reducer';
import { CoreModule } from './modules/core/core.module';
import { HttpBookingService } from './modules/booking/services/http-booking-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingModule } from './modules/booking/booking.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { OperatorsComponent } from './modules/rxjs/operators/operators.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BookingModule,
    StoreModule.forRoot({ message: simpleReducer }),
    StoreDevtoolsModule.instrument({
      name: 'HotelManagement-Client',
      logOnly: environment.production
    })
    
  ],
  declarations: [AppComponent, OperatorsComponent],

  providers: [
    { provide: 'UserService', useClass: HttpUserService },
    { provide: 'BookingService', useClass: HttpBookingService },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
