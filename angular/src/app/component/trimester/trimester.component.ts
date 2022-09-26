import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ImcService } from 'src/app/service/imc.service';

@Component({
  selector: 'app-trimester',
  templateUrl: './trimester.component.html',
  styleUrls: ['./trimester.component.css']
})
export class TrimesterComponent implements OnInit {
imcData : any[]
color: any
next : any = 0
compteur : any = 1

  constructor(private imcService : ImcService) { }

  ngOnInit(): void {
    this.imcData = this.imcService.getimcData()
     console.log(this.imcData)



    }

    previousImc(){
      this.next = this.next - 5
      this.compteur -= 1
    }

    nextImc(){
      this.next = this.next + 5
      this.compteur += 1
    }
   }



