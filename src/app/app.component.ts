import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Modules/user';
import { JsonPipe, NgForOf } from '@angular/common';
import {CourseListComponent} from "./course-list/course-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Third Semisters Progress';

  // Two new variables with types
  User1: User = {
    id: 1,
    subjectCode: 'MAD001',
    instructorName: 'Mathew Haug',
    isAdmin: true,
    email: 'mathew@myscc.ca',
    marks: 10
  }

  User2: User = {
    id: 2,
    subjectCode: 'MAD002',
    instructorName: 'Darren',
    isAdmin: true,
    email: 'darren@myscc.ca',
    marks: 10
  }

  userList: User[] = //any[] would have worked as well
    [this.User1,this.User2,
      {id: 3,
        subjectCode: 'MAD003',
        instructorName: 'Pantula',
        isAdmin: true,
        email: 'pantula@myscc.ca',
        marks: 10},
      {id: 4,
        subjectCode: 'MAD004',
        instructorName: 'Diana Nano',
        isAdmin: true,
        email: 'nano@myscc.ca',
        marks: 10,},
      {id: 5,
        subjectCode: 'MAD005',
        instructorName: 'Manoj',
        isAdmin: true,
        email: 'manoj@myscc.ca',
        marks: 10},
      {id: 6,
        subjectCode: 'MAD006',
        instructorName: 'Takaki',
        isAdmin: true,
        email: 'takaki@myscc.ca',
        marks: 10}
      ];


    //Function that gets called from our onclick. Takes in an
    //argument of a variable called user, which is type User and returns void
    toggleAdminStatus(user: User): void {
      user.isAdmin = !user.isAdmin;
    }

}
