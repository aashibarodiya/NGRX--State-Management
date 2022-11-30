import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../users/services/user.service';
import { BookingDetails } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit, OnDestroy {
  // bookingform:FormGroup;

  constructor(
    @Inject('UserService') private userService: UserService,
    @Inject('BookingService') private bookingService: BookingService,
    private router: Router,
    private fb: FormBuilder
  ) {
    
  }

  user?: any;
  roomprice=500;

  booking: BookingDetails = {
    userId: '',
    numberOfDaysStay: 1,
    
  };

  updateUserStatus(details: any): void {
    if (details) this.user = details.user;
    else this.user = undefined;
  }

  subsciption: any;
  ngOnInit(): void {
    /**
     * get details from the url parameter
     */
    console.log('getting logged in user details');
    var details = this.userService.getLoggedInUser();
    if (details) this.user = details.user;
    this.subsciption = this.userService
      .getUserStatusAnnouncement()
      .subscribe((details) => this.updateUserStatus(details));
  }
  ngOnDestroy(): void {
   
    this.subsciption.unsubscribe();
  }

  bookRoom() {
    

    console.log('room booked');
    console.log(this.booking);
    this.booking.userId = this.user.email;
    this.bookingService
      .addBooking(this.booking)
      .subscribe((x) => console.log(x));
  }
}
