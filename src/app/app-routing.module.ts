import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from "./component/register/register.component";
import { NavComponent } from './shared/nav/nav.component';
import { InsertComponent } from './component/insert/insert.component';
import { ErrorComponent } from './component/error/error.component';
import { AuthService  as AuthGuard} from './service/auth.service';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'nav',component:NavComponent},
  {path:'insert',component:InsertComponent},
  {path:'error',component:ErrorComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
