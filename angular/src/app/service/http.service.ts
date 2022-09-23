import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url : string ="http://localhost:3000/user"

  constructor(private http: HttpClient) {

  }
  getLoginUrl(){
    return this.url + "/login"
  }

  getCreateUser(){
    return this.url
  }

  getCreateWeight(){
    return this.url + "/weight"
  }

  getAllWeightByName(value : any){
    return this.url  + "/:" + value
  }
}
