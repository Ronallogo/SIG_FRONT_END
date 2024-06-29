import {Component, OnInit} from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {RouterLinkActive} from "@angular/router";
import {NgForOf} from "@angular/common";
import {MakeRegistrationService} from "../make-registration.service";

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

  public registerForm! :  any
  listMatieres!: ["USER" , "ADMIN" , "MANAGER" ];



    constructor(
      private service : MakeRegistrationService,
    ) {
    }

  ngOnInit(): void {
  this.registerForm  = {firstname  : "my_firstname" , lastname : "my_lastname" , email : "my_email" , password: "0000000"  , role : ""};
  }

  makeRegistration(){
      console.log(this.registerForm)
      this.service.registration(this.registerForm).subscribe(res => {
        console.log(res);
      });

  }
}
