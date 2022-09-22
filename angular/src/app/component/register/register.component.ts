import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profil } from 'src/app/model/profil';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  userWeight : Profil
  createUser : any;
  createWeight : any;
  constructor(private fb: FormBuilder, private httpService : HttpService, private http : HttpClient, private route : Router ) { }
  //controle de champs
  ngOnInit(): void {
    this.createUser =  this.httpService.getCreateUser();
    this.createWeight = this.httpService.getCreateWeight()
    this.form = this.fb.group({
      pseudo: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required],),
      old: this.fb.control('', [Validators.required]),
      cut: this.fb.control('', [Validators.required]),
      weight: this.fb.control('', [Validators.required])
    })
  }

  get pseudo() {
    return this.form.get('pseudo')
  }
  get password() {
    return this.form.get('password')
  }
  get old() {
    return this.form.get('old')
  }

  get cut() {
    return this.form.get('cut')
  }
  get weight() {
    return this.form.get('weight')
  }

  reception(value: any) {
    if (this.form.valid) {
      this.user = this.form.value;
      this.userWeight = this.form.value
      // Créer l'utilisateur
      this.http.post<any>(this.createUser,{
        name: this.user.pseudo,
        password: this.user.password,
        age : this.user.old,
        taille : this.user.cut
      }).subscribe(data => {

      })

      //Sépare le poids de l'utilisateur
      this.http.post<any>(this.createWeight,{
        weight : this.userWeight.weight,
        owner : this.userWeight.pseudo,
        date : Date.now()
       // Ça marche mais je ne sais pas pourquoi
      }).subscribe(data => {

      })

      this.route.navigate(["/"])
      // console.log(this.user)
      // alert('votre inscription à était réalisé avec succès ')
    }
  }
}
