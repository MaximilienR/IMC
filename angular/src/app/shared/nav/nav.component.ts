import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { Chart, registerShape } from '@antv/g2';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  data : any
  constructor(
  private loginService:LoginService,
  private route:Router) { }

  ngOnInit(): void {
    this.data = localStorage.getItem("name")
    console.log(this.data)
    // this.data = this.loginService.getDatas()
    // console.log(this.data.data.name)
  }

  deconnexion(){
    this.loginService.deconnec();
    this.route.navigate( [''])
  }

}

