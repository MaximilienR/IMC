import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Profil } from 'src/app/model/profil'
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  form!:FormGroup;
  valeur:boolean=true;
  profil!:Profil;
  formInsert!: FormGroup;
  owner : any
  createWeight : any
  constructor(private fb: FormBuilder, private http : HttpClient, private httpService : HttpService) { }
  ngOnInit(): void {
    this.owner = localStorage.getItem("name")
    this.createWeight = this.httpService.getCreateWeight()
    this.form=this.fb.group({
      weight:this.fb.control('',[Validators.required]),
      date:this.fb.control('',[Validators.required])
    })

  }

  get weight(){
    return this.form.get('weight')
  }
  get date(){
    return this.form.get('date')

  }

  big(){
    this.valeur=!this.valeur;
  }
  smail(){
    this.valeur=!this.valeur;



  }
  stockage(value:any){
    {
      if(this.form.value){
        this.profil=this.form.value;
        console.log(this.profil)
        this.http.post<any>(this.createWeight,{
          weight : this.profil.weight,
          owner : this.owner,
          date :  this.profil.date
         // Ça marche mais je ne sais pas pourquoi
        }).subscribe(data => {

        })

      }
    }
      }

}
