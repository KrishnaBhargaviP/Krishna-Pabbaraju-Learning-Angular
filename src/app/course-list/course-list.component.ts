import {Component, OnInit} from '@angular/core';
import {Course} from "../Shared/models/course";
import {CourseService} from "../Services/course.service";
import {RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightAdminPipe} from "../highlight-admin.pipe";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-course-list',
  imports: [
    RouterLink,
    NgForOf,
    LowerCasePipe,
    TitleCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    HighlightAdminPipe,
    HoverHighlightDirective,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'subjectCode', 'instructorName', 'isAdmin', 'email', 'marks', 'courseCost', 'imageUrl'];
  courseList: Course[] = [];

  constructor (private courseService: CourseService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => this.courseList = data,
      error:err => console.error("Error fetching Courses", err),
      complete:() => console.log("Courses data fetch complete!")
    })

  }
  selectedCourse?: Course;
  selectStudent(course: Course): void {
    this.selectedCourse = course;
  }

}
