import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { courses } from '../Shared/Modules/mockCourse.data';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  getCourses(): Observable<any[]> {
    return of(courses);
  }

  getCourseById(id: number): Observable<any | undefined> {
    return of(courses.find(course => course.id === id));
  }

  addCourse(newCourse: any): Observable<any[]> {
    courses.push(newCourse);
    return of(courses);
  }

  updateCourse(updatedCourse: any): Observable<any[]> {
    const index = courses.findIndex(course => course.id === updatedCourse.id);
    if (index !== -1) {
      courses[index] = updatedCourse;
    }
    return of(courses);
  }

  deleteCourse(id: number): Observable<any | undefined> {
    const index = courses.findIndex(course => course.id === id);
    const deletedCourse = courses.splice(index, 1)[0];
    return of(deletedCourse);
  }
}
