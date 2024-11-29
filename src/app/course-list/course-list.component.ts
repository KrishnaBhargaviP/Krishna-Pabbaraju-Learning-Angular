import {Component, OnInit, ViewChild} from '@angular/core';
import {Course} from "../Shared/models/course";
import {CourseService} from "../Services/course.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {CurrencyPipe, DatePipe, LowerCasePipe, NgForOf, NgIf, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightAdminPipe} from "../highlight-admin.pipe";
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow,
  MatRowDef,
  MatTable, MatTableDataSource
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
    MatPaginator,
    NgIf
  ],
  templateUrl: './course-list.component.html',
  standalone: true,
  styleUrl: './course-list.component.scss'
})
export class CourseListComponent implements OnInit {
  //Placeholder values for the table
  displayedColumns:string[]= ['id', 'subjectCode', 'instructorName', 'isAdmin', 'courseEmail', 'marks', 'courseCost'];
  course: Course | undefined;
  courseList: Course[] = [];
  currentIndex: number = 0;//to track the current index
  dataSource: MatTableDataSource<Course> = new MatTableDataSource(this.courseList);
  error: string | null = null; //Var to hold an error message

  //Reference to the paginator
  @ViewChild(MatPaginator) paginator: MatPaginator | null =null;



  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}



  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses: Course[]) => {
        this.courseList = courses;
        this.error = null; // Clear any previous errors
        this.dataSource.data = courses;
        // Subscribe to paramMap changes to update the page view
        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.courseList.findIndex(course => course.id === id);
            this.course = this.courseList[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = 'Error fetching students';
        console.error('Error fetching students:', err);
      }
    });
  }

  //function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/courses']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.courseList.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/courses', this.courseList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/courses', this.courseList[this.currentIndex].id]);
    }
  }

}
