import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean=false;

  constructor() {


  }
  connect(){
    if(JSON.parse(localStorage.getItem('isLog'))==null||undefined){
      this.isLogin=true;
      localStorage.setItem('isLog',JSON.stringify(this.isLogin))
      this.isLogin=JSON.parse(localStorage.getItem('isLog'));
      console.log(this.isLogin)
    }else{
      console.log(this.isLogin)
    }
  }
  isLog():boolean{
    this.isLogin=JSON.parse(localStorage.getItem('isLog'));
    console.log(this.isLogin);
    return this.isLogin;
  }
  deconnec(){
    localStorage.removeItem('isLog');
  }
}
