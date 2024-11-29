import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {JsonPipe, NgForOf} from "@angular/common";
import {CourseListComponent} from "./course-list/course-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, JsonPipe, CourseListComponent, RouterLink, RouterLinkActive, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Courses Progress Management System';
}
