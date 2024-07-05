import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MakeRegistrationComponent} from "../registration/make-registration/make-registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MakeRegistrationComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'securitySpring';
}
