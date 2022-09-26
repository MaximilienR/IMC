import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { Chart, registerShape } from '@antv/g2';
import { NgxGaugeModule } from 'ngx-gauge';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  data : any
  lastValue : any = JSON.parse(localStorage.getItem("IMC"))
  constructor(
  private loginService:LoginService,
  private route:Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem("name")
    console.log(this.data)
    // this.data = this.loginService.getDatas()
    // console.log(this.data.data.name)
  }

  saisirPoids(){
    this.route.navigate( ['insert'])
  }

  deconnexion(){
    this.loginService.deconnec();
    this.route.navigate( [''])
  }

    gaugeValue  =  this.lastValue ;
    gaugeLabel  =  "IMC" ;

}

