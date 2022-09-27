import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from "./component/register/register.component";
import { NavComponent } from './shared/nav/nav.component';
import { InsertComponent } from './component/insert/insert.component';
import { ErrorComponent } from './component/error/error.component';
import { CardsComponent } from './component/cards/cards.component';
import { WeekComponent } from './component/week/week.component';
import { MonthComponent } from './component/month/month.component';
import { AuthService  as AuthGuard} from './service/auth.service';
import { TrimesterComponent } from './component/trimester/trimester.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'card',component:CardsComponent},
  {path:'register',component:RegisterComponent},
  {path:'nav',component:NavComponent},
  {path:'insert',component:InsertComponent, canActivate:[AuthGuard]},
  {path:'week',component:CardsComponent, canActivate:[AuthGuard]},
  {path:'month',component:MonthComponent, canActivate:[AuthGuard]},
  {path:'trimester',component:TrimesterComponent,canActivate:[AuthGuard]},
  {path:'**',component:ErrorComponent,/*canActivate:[AuthGuard]*/}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
