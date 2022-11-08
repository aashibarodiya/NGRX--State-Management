import { Observable, Subject } from "rxjs";
import { LoggedInDetails, LoginInfo, User } from "../models/user";

//Interface for User with essential methods
export interface UserService
{
    login(loginInfo:LoginInfo):Observable<LoggedInDetails>|Promise<User>;

    register(user:User):Observable<User>|Promise<User>;

    isEmailRegistered(email:string):Observable<boolean>|Promise<boolean>;

    logOut():Observable<void>|Promise<void>;
    
    getAuthenticationHeader():any;

    getLoggedInUser():LoggedInDetails|undefined;

    
}