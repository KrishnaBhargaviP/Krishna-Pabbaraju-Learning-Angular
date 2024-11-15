import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {CourseListComponent} from "./app/course-list/course-list.component";
import {CourseDetailComponent} from "./app/course-detail/course-detail.component";
import {ModifyCourseComponent} from "./app/modify-course/modify-course.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'', redirectTo: '/courses', pathMatch: 'full'}, //default route
  { path: 'courses', component: CourseListComponent }, // Eagerly loaded route for the course list
  // Lazy loaded route for course details by ID
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./app/course-detail/course-detail.component').then(
        m => m.CourseDetailComponent
      )
  },
  // Lazy loaded route for modifying a course
  {
    path: 'modify-course',
    loadComponent: () =>
      import('./app/modify-course/modify-course.component').then(
        m => m.ModifyCourseComponent
      )
  },
  // Wildcard route for a 404 page (lazy loaded)
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        m => m.PageNotFoundComponent
      )
  }
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
