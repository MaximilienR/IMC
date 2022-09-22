import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  user!: User;
  constructor(private fb: FormBuilder) { }
  //controle de champs
  ngOnInit(): void {
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
      console.log(this.user)
      alert('votre inscription à était réalisé avec succès ')
    }
  }
}
