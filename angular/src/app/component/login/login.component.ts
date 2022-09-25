
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { HttpService } from 'src/app/service/http.service';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  error: boolean = false;
  messageError : boolean = false
  message : string
  random : any
 loginUser : any
  constructor(private fb: FormBuilder, private loginService: LoginService, private httpService : HttpService, private http : HttpClient, private route : Router ) { }


  //test regex :Minimum huit caractères, au moins une lettre et un chiffre :



  ngOnInit(): void {
    this.random = this.httpService.getLoginUrl()
    console.log(this.random)
    this.form = this.fb.group({
      pseudo: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
      )]),

    })
  }


  get pseudo() {
    return this.form.get('pseudo')
  }

  get password() {
    return this.form.get('password')
  }

  //test verrication mot de passe
  passwordAccess(value: any) {
    if(this.form.valid){
      this.loginUser =  this.form.value

      this.http.post<any>(this.random, {
        name :  this.loginUser.pseudo,
        password : this.loginUser.password,

      }).subscribe(data => {

          if(data.status == 400){
            this.messageError = true
            this.message = "Votre nom d'utilisateur ou votre mot de passe est ou sont incorrects..."
          } else if(data.status == 401){
            this.messageError = true
            this.message = "Votre nom d'utilisateur ou votre mot de passe est ou sont incorrects..."
          } else if(data.status == 500){
            this.messageError = true
            this.message = "Une erreur est survenue. Veuillez retenter plus tard"
          } else {
            this.loginService.getLogData(data)
            localStorage.setItem("token", data.data.token)
            localStorage.setItem("name",data.data.name)
            this.route.navigate(["/card"])
          }


      })



    }



    // if (value.target.value == "Sudo123$") {
    //   this.error = false;
    //   this.loginService.connect();

    // } else {
    //   this.error = true
    // }

  }
}
