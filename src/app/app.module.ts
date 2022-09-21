import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './component/error/error.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavComponent } from './shared/nav/nav.component';
import { InsertComponent } from './component/insert/insert.component';
import { WeekComponent } from './component/week/week.component';
import { TrimesterComponent } from './component/trimester/trimester.component';
import { MonthComponent } from './component/month/month.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    InsertComponent,
    WeekComponent,
    TrimesterComponent,
    MonthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
