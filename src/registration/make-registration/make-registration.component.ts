import {Component, OnInit} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MakeRegistrationService} from "./make-registration.service";

@Component({
  selector: 'app-make-registration',
  standalone: true,
  imports: [
    FormsModule,
    RouterLinkActive,
    NgForOf
  ],
  templateUrl: './make-registration.component.html',
  styleUrl: './make-registration.component.css'
})
export class MakeRegistrationComponent implements  OnInit{

  public registerForm  = {firstname  : "" , lastname : "" , email : "" , password: ""  , role : "USER"};
  listRoles!: ["USER" , "ADMIN" , "MANAGER" ];



    constructor(
      private service : MakeRegistrationService,
    ) {
    }

  ngOnInit(): void {


  }

  makeRegistration(){
      console.log(this.registerForm)
      console.log(this.registerForm.role)
      this.service.registration(this.registerForm).subscribe(res => {
        console.log(res);
      });

  }
}
