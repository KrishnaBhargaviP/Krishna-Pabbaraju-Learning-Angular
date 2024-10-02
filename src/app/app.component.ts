import { Component, OnInit } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedItem: any;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourseById(1).subscribe(data => {
      this.selectedItem = data;
    });
  }
}
