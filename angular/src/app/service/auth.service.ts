import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private serviceLogin:LoginService,private router:Router) {}
  canActivate():boolean{


    if(typeof localStorage.getItem("token") == "string"){
      return true;
    }else{
      this.router.navigate([''])
      return false
    }

   }
}
