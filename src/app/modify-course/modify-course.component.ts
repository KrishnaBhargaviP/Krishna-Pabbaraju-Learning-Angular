import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Course} from "../Shared/models/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../Services/course.service";
import {AutoFocusDirective} from "../directives/auto-focus.directive";
import {MatCheckbox, MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-modify-course',
  imports: [
    ReactiveFormsModule,
    AutoFocusDirective,
    MatCheckbox,
    MatLabel,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './modify-course.component.html',
  standalone: true,
  styleUrl: './modify-course.component.scss'
})
export class ModifyCourseComponent implements OnInit{
  courseForm: FormGroup;
  course: Course | undefined;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      subjectCode: ['', Validators.required],//First name is required
      instructorName: ['', Validators.required],
      email: [''],
      marks: [''],
      imageURL : [''],
      isAdmin: [false]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(+id).subscribe(course => {
        if(course) {
          this.course = course;

          this.courseForm.patchValue(course);
        }
      });
    }
  }

  onSubmit(): void {
    const course: Course = this.courseForm.value;

    // Check if we're updating an existing student
    if (course.id) {
      this.courseService.updateCourse(course);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.courseService.generateNewId(); // This method will create a new ID
      course.id = newId;
      this.courseService.addCourse(course);
    }

    this.router.navigate(['/courses']);
  }

  onDelete(): void {
    const id = this.courseForm.get('id')?.value;
    if (id) {
      this.courseService.deleteCourse(id);
      this.router.navigate(['/courses']);
    }
  }

  navigateToStudentList(): void {
    this.router.navigate(['/courses']);
  }
}
