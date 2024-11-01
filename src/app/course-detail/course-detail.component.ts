import {Component, OnInit} from '@angular/core';
import {Course} from "../Shared/models/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../Services/course.service";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit{
  //Needs to be | undef because there wont always be a student thats clicked on
  course: Course | undefined; //The student to display
  courseList: Course[] = [];// to store the list of students
  currentIndex: number = 0;//to track the current index

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}
//rewrite onInit to get the list of students and the current student
  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courseList = courses;

      // Subscribe to paramMap changes to actually see the page changing
      //If we dont do this, the URL will change but the view will not
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.courseList.findIndex(course => course.id === id);
          this.course = this.courseList[this.currentIndex];
        }
      });
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
