import {Component, OnInit} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {RouterLinkActive} from "@angular/router";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        RouterLinkActive
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{


  public loginForm!: {username: string, password: string};

  ngOnInit(): void {
    this.loginForm  = {  username : "my_username", password: "my_password"  };
  }

  constructor(
    private service : LoginService
  )
  {}


  LoginFunction(){
    console.log(this.loginForm)
    this.service.login(this.loginForm).subscribe(res => {
      console.log(res);
    });
  }









}
