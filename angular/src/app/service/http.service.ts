import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profil} from '../model/profil'
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

  getAllWeightByName(value : any):Observable<Profil>{
   this.url = this.url  + `/weight/${value}`
   return this.http.get<Profil>(this.url)
  }
}
