import { Component } from '@angular/core';
import* as userService from 'src/app/modules/users/services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userservice!: userService.UserService;
  title = 'HotelManagement-Client';
}
