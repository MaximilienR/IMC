import { Injectable } from '@angular/core';
import { Imc } from '../model/imc';

@Injectable({
  providedIn: 'root'
})
export class ImcService {
imcData : Imc[] =[]

getimcData(){
  return this.imcData
}


addImcData(id: any,imc : any, weight: any, date: Date ){
if(id > this.imcData.length){
  this.imcData.push({id,imc,weight,date})
}

}

  constructor() { }
}
