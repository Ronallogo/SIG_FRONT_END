import { Routes } from '@angular/router';
import {MakeRegistrationComponent} from "../registration/make-registration/make-registration.component";
import {LoginComponent} from "../login/login.component";


export const routes: Routes = [
  {path : "registration" , component: MakeRegistrationComponent} ,
  {path : "login" , component: LoginComponent} ,
  {path:"" , redirectTo: "/login" , pathMatch: "full"}
];
