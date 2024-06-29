import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MakeRegistrationComponent} from "../registration/make-registration/make-registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'securitySpring';
}
