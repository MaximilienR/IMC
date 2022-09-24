import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LineGrid } from '@antv/g2/lib/dependents';
import { Imc } from 'src/app/model/imc';

import { HttpService } from 'src/app/service/http.service';
import { ImcService } from 'src/app/service/imc.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  data : any
  weights : any[]
  retrieveHeight : any
  height: number
  owner : any
  imc : number
  imcData : any
  compteur = 1
  constructor(private httpService : HttpService,  private http : HttpClient, private imcService : ImcService) { }

  getWeight(value : any){


    this.httpService.getAllWeightByName(value).subscribe((weight)=> {
      this.data =  weight
      this.weights = [this.data.data]

      for(let i=0;i<this.weights[0].length;i++){
      // console.log(this.weights[0][i].date)
        this.imc = Math.round(this.weights[0][i].weight /(this.height / 100)**2)

        this.imcService.addImcData(this.compteur,this.imc, this.weights[0][i].weight ,this.weights[0][i].date)
        this.compteur += 1
        this.imcData = this.imcService.getimcData();
        console.log(this.imcData)

      }


    })
  }

  ngOnInit(): void {
    this.owner = localStorage.getItem("name")
    this.httpService.getHeightByName(this.owner).subscribe((height)=>{

      this.retrieveHeight = height
      this.height =  this.retrieveHeight.data[0].taille
      localStorage.setItem("Taille",JSON.stringify(this.height))
    }

    )
    this.height = JSON.parse(localStorage.getItem("Taille"))

    this.getWeight(this.owner)

  }

}
