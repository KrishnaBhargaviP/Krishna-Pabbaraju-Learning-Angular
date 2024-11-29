import { Component, OnInit } from '@angular/core';
import { Course } from "../Shared/models/course";
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../Services/course.service";
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from "@angular/common";
import { HoverHighlightDirective } from "../directives/hover-highlight.directive";
import { TextColourDirective } from "../directives/text-colour.directive";
import { MatCard, MatCardContent, MatCardHeader, MatCardModule } from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import { MatButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    NgIf,
    HoverHighlightDirective,
    NgForOf,
    TextColourDirective,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatButton,
    MatCardModule,
    MatIconModule,
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined; // The course to display
  courseList: Course[] = []; // To store the list of courses
  currentIndex: number = 0; // To track the current index
  error: string | null = null; // For error handling

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch the list of courses
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseList = courses;

        // Subscribe to paramMap changes for dynamic URL updates
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.courseList.findIndex(course => course.id === id);
            if (this.currentIndex !== -1) {
              this.course = this.courseList[this.currentIndex];
            } else {
              this.error = 'Course not found.';
              this.course = undefined;
            }
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching courses.';
        console.error('Error fetching courses:', err);
      }
    });
  }

  // Navigate back to the course list view
  goBack(): void {
    this.router.navigate(['/courses']);
  }

  // Move forward through the array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.courseList.length - 1) {
      this.currentIndex++;
      this.course = this.courseList[this.currentIndex];
      this.router.navigate(['/courses', this.courseList[this.currentIndex].id]);
    }
  }

  // Move backward through the array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.course = this.courseList[this.currentIndex];
      this.router.navigate(['/courses', this.courseList[this.currentIndex].id]);
    }
  }
}
