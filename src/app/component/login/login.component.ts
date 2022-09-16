import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  user!:User;
  constructor(private fb:FormBuilder){}




  ngOnInit(): void {
    this.form=this.fb.group({
      pseudo:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(1-9)(?=.*?[#?!@$%^&*-]).{8,}$')]),

    })
  }

  get pseudo(){
    return this.form.get('pseudo')
  }

  get password(){
    return this.form.get('password')
  }

}
