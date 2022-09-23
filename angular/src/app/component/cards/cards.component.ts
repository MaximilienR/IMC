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

  owner : any
  constructor(private httpService : HttpService,  private http : HttpClient,) { }

  getWeight(value : any){
    this.httpService.getAllWeightByName(value).subscribe((weight)=> {
      this.data =  weight
      console.log(this.data.data)
    })
  }

  ngOnInit(): void {
    this.owner = localStorage.getItem("name")
    this.getWeight(this.owner)

  }

}
