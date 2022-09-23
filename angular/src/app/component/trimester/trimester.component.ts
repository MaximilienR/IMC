import { Component, OnInit } from '@angular/core';
//test import pour graphique
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-trimester',
  templateUrl: './trimester.component.html',
  styleUrls: ['./trimester.component.css']
})
export class TrimesterComponent implements OnInit {
  cercle:any

  constructor() { }

  ngOnInit(): void {
  }
  /*test variable graphique
   cercle = new Chart({
    container: 'c1',
    width: 600,
    height: 300,
  });
*/
}
