import { Component, OnInit } from '@angular/core';
import { ImcService } from 'src/app/service/imc.service';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
imcData : any
  constructor(private imcService : ImcService) { }

  deleteIMC(value:any){
    this.imcData.splice(value,1)
  }

  ngOnInit(): void {
    this.imcData = this.imcService.getimcData()
   // console.log(this.imcData)
  }

}
