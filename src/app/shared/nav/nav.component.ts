import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
  private loginService:LoginService,
  private route:Router) { }

  ngOnInit(): void {
  }

  deconnexion(){
    this.loginService.deconnec();
    this.route.navigate( [''])
  }

}
