import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Modules/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'User Details';

  // Two new variables with types
  User1: User = {
    id : 1,
    firstName: 'Krishna',
    lastName: 'Pabbaraju',
    isAdmin: true,
    email: 'w0866008@myscc.ca'
  }
}
