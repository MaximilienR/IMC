import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HttpService } from 'src/app/service/http.service';

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
  constructor(private httpService : HttpService,  private http : HttpClient,) { }

  getWeight(value : any){


    this.httpService.getAllWeightByName(value).subscribe((weight)=> {
      this.data =  weight
      this.weights = [this.data.data]
      console.log(this.weights)
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
