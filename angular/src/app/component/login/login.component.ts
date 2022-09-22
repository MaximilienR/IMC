
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  random : any
  constructor(private fb: FormBuilder, private loginService: LoginService, private httpService : HttpService ) { }


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
    if (value.target.value == "Sudo123$") {
      this.error = false;
      this.loginService.connect();

    } else {
      this.error = true
    }

  }
}
