import { Component, OnInit } from '@angular/core';
import { ImcService } from 'src/app/service/imc.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
imcData : any[]
next : any = 0
compteur : any = 1


  constructor(private imcService : ImcService) { }

  deleteIMC(value:any){
    this.imcData.splice(value,1)
  }

  previousImc(){
    this.next = this.next - 5
    this.compteur -= 1
  }

  nextImc(){
    this.next = this.next + 5
    this.compteur += 1
  }

  ngOnInit(): void {
    this.imcData = this.imcService.getimcData()
   // console.log(this.imcData)
  }

}
