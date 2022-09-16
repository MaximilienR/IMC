import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!:FormGroup;
  user!:User;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      pseudo:this.fb.control('',[Validators.required]),
      password:this.fb.control('',[Validators.required]),
      old:this.fb.control('',[Validators.required])
  })
}

get pseudo(){
  return this.form.get('pseudo')
}
get password(){
  return this.form.get('password')
}
get old(){
  return this.form.get('old')
}
}
