import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseName',
  standalone: true
})
export class CourseNamePipe implements PipeTransform {

  transform(subjectCode: string, instructorName: string): string {
    console.log('Custom Pipe Initialized - Version 2.0');
    return `${subjectCode} - Instructor: ${instructorName}`;
  }

}
