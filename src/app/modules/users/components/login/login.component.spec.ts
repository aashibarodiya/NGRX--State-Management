import {async,  ComponentFixture, TestBed } from '@angular/core/testing';

//import { LoginComponent } from './login.component';

//import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';



import { LoginComponent } from './login.component';



describe('LoginComponent', () => {

  let component: LoginComponent;

  let fixture: ComponentFixture<LoginComponent>;

  let userServiceMock:any;

  let routerMock:any;



  beforeEach(() => {

   userServiceMock={

     login:jest.fn()

   };

   

    routerMock=jest.fn();

    fixture = new LoginComponent(

    

      userServiceMock,

      routerMock

    );

  //  fixture.ngOnInit();

  });

  describe('test:ngOnInit',()=>{

    it('should initialize login form', () => {

      const loginForm={

        email:'',

        password:''

      };

      expect(fixture.LoginInfo.value).toEqual(loginForm);

    });

  });



  

});