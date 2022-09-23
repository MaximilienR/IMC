import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Profil } from 'src/app/model/profil'
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

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form=this.fb.group({
      weight:this.fb.control('',[Validators.required,Validators.min(30)]),
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
      this.profil=this.form.value;
      console.log(this.profil)
    }
  }
}
