import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import { compare } from 'src/app/modules/shared/directives/compare.directive';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user?:User
  status=''; 
  statusStyle='text-primary';
  form:FormGroup;
  /*
  * Constructor for Registration Component
  */
  constructor(private builder :FormBuilder,
             @Inject("UserService") private userService:UserService,
              private router:Router
              ) {

    // Declaring password rules
    const passwordRules=[
      Validators.required, 
      Validators.minLength(4),
      Validators.maxLength(15)
    ];

    // Creating form with builder
    this.form=this.builder.group({
      name: ['', [Validators.required]],
      email:['', [
                  Validators.required,
                  Validators.email, 
                ],
                [
                  //uniqueEmailValidator(this.userService)
                ]
            ],
      profileUrl:['',[
                  Validators.required
      ]],
      password:['',passwordRules],
      confirmPassword:['',passwordRules],
      phoneNumber:['',Validators.required],
      aadhaarId:['',Validators.required]
    
    },
    //{validator: compare('password','confirmPassword')}
    );
  }
  /*
  * handleRegistration method 
    takes: form values 
    invokes: register method of user service which requires user object
    redirect: navigate to login upon successful registration

  */
  handleRegistration(){
    console.log(this.form);
    if(this.form.invalid)
      {
        console.log("Form is invalid");
        return;
      }
    
    this.user={
      ...this.form.value,
    
    };
    console.log('registering', this.user);
      (<Observable<User>>(this
        .userService
        .register(this.user!)
        ))
        .pipe(
          tap((response:any)=>console.log('response',response)),
        )
        .subscribe({
          next:(user:any)=>{
          console.log('registered', user);
          this.router.navigate(['/user/login']);
        },
        error:error=> console.log('error',error)
      })   
  }

  ngOnInit(): void {
  }

}
