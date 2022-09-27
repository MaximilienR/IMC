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

comptMaigreur : number =0
comptNormal : number = 0
comptSurpoids : number = 0
comptObese : number = 0

pourcentMaigreur : number = 0
pourcentNormal : number = 0
pourcentSurpoids : number = 0
pourcentObese : number = 0

chartOptions : any


  constructor(private imcService : ImcService) { }

  ngOnInit(): void {
    this.imcData = this.imcService.getimcData()
     console.log(this.imcData)
    for(let i=0;i<this.imcData.length;i++){
      if(this.imcData[i].condition =="Maigreur"){

        this.comptMaigreur = this.comptMaigreur+  1
      } else if(this.imcData[i].condition =="Normal"){
        this.comptNormal += 1
      } else if(this.imcData[i].condition =="Surpoids"){
        this.comptSurpoids += 1
      } else if(this.imcData[i].condition =="Obése"){
        this.comptObese += 1
      }
    }
    this.pourcentMaigreur = this.comptMaigreur / this.imcData.length *100
    this.pourcentNormal = this.comptNormal / this.imcData.length *100
    this.pourcentSurpoids = this.comptSurpoids / this.imcData.length *100
    this.pourcentObese = this.comptObese / this.imcData.length *100
    console.log(this.pourcentObese)
    this.chartOptions = {
      animationEnabled: true,
      title: {
      text: "Répartition en durée de l'IMC en 90 jours"
      },
      data: [{
      type: "pie",
      startAngle: -90,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: this.pourcentMaigreur, name: "Maigreur" },
        { y: this.pourcentNormal, name: "Normal" },
        { y: this.pourcentSurpoids, name: "Surpoids" },
        { y: this.pourcentObese, name: "Obése" }
      ]
      }]
    }
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



