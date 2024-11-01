import { Injectable } from '@angular/core';
import {Course} from "../Shared/models/course";
import {courseList} from "../Shared/models/mockCourse.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = courseList;//Local copy of student data for CRUD Operations
  constructor() { }
  //Returns all students

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getCourseById(id: number): Observable<Course | undefined> {
    return of(this.courses.find(course => course.id === id));
  }

  addCourse(course: Course): Observable<Course> {
    this.courses.push(course);
    return of(course);
  }

  updateCourse(updatedCourse: Course): Observable<Course | undefined> {
    const index = this.courses.findIndex(course => course.id === updatedCourse.id);
    if (index > -1) {
      this.courses[index] = updatedCourse;
      return of(updatedCourse);
    }
    return of(undefined);
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
  // New method to generate a new unique ID
  generateNewId(): number {
    return this.courses.length > 0 ? Math.max(...this.courses.map(course => course.id)) + 1 : 1;
  }
}
