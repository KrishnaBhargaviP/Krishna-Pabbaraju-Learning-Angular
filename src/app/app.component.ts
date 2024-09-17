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

  User2: User = {
    id : 2,
    firstName: 'Test user2',
    lastName: 'last name2',
    isAdmin: true,
    email: 'testmail2@myscc.ca'
  }

  userList: User[] = //any[] would have worked as well
    [this.User1,this.User2,
      {id : 3,
        firstName: 'Test user3',
        lastName: 'last name3',
        isAdmin: false,
        email: 'testmail3@myscc.ca'},
      {id : 4,
        firstName: 'Test user4',
        lastName: 'last name4',
        isAdmin: true,
        email: 'testmail4@myscc.ca'},
      {id : 5,
        firstName: 'Test user5',
        lastName: 'last name5',
        isAdmin: true,
        email: 'testmail5@myscc.ca'},
      {id : 6,
        firstName: 'Test user6',
        lastName: 'last name6',
        isAdmin: false,
        email: 'testmail6@myscc.ca'}
      ];
}
