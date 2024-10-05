import { Component, Input, OnInit } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import { CourseDetailComponent } from '../course-detail/course-detail.component';
import { CourseService } from '../services/course.service';
import { User } from "../models/user";
import { courses } from "../Shared/Modules/mockCourse.data";  // Mock data for courses

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    NgForOf,
    CourseDetailComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']  // Corrected to 'styleUrls'
})
export class CourseListComponent implements OnInit {
  // Placeholder values for the table
  displayedColumns: string[] = ['id', 'subjectCode', 'instructorName', 'marks', 'isAdmin'];
  courseList: User[] = [];
  selectedItem?: User;
  @Input() content?: User;

  constructor(private courseService: CourseService) {
    // Constructor is primarily used for dependency injection
  }

  ngOnInit() {
    // Lifecycle hook to fetch and initialize course data
    this.courseService.getCourses().subscribe({
      next: (data: User[]) => this.courseList = data,
      error: err => console.error('Error fetching Courses', err),
      complete: () => console.log('Course data fetch complete!')
    });
  }

  selectedCourse?: User;
  selectCourse(course: User): void {
    this.selectedCourse = course;
  }

  protected readonly courses = courses;

  onCourseClick(id: number): void {
    this.courseService.getCourseById(id).subscribe(data => {
      this.selectedItem = data;
    });
  }
}
