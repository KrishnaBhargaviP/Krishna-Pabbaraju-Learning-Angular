import {Component, Input, OnInit} from '@angular/core'; // Assuming Course model exists
import {NgClass, NgForOf} from '@angular/common';
import { CourseDetailComponent } from '../course-detail/course-detail.component';  // Detail component for course
import { CourseService } from '../services/course.service';
import {User} from "../models/user";
import {courses} from "../Shared/Modules/mockCourse.data";  // Service to fetch courses

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    NgForOf,
    CourseDetailComponent,
    NgClass
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
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
