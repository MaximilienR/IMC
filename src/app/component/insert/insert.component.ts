import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  valeur:boolean=true;

  constructor() { }

  change(){
    this.valeur=!this.valeur;
  }
  ngOnInit(): void {
  }


}
