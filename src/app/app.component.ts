import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {JsonPipe, NgForOf} from "@angular/common";
import {CourseListComponent} from "./course-list/course-list.component";
import {courses} from "./Shared/Modules/mockCourse.data";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, CourseListComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title= 'Course Progress of Student';
  protected readonly courses = courses;
}
