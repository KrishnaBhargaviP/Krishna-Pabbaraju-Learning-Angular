import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CourseListComponent } from './app/course-list/course-list.component';
import { CourseDetailComponent } from './app/course-detail/course-detail.component';
import { ModifyCourseComponent } from './app/modify-course/modify-course.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListComponent },
  {
    path: 'courses/:id',
    loadComponent: () =>
      import('./app/course-detail/course-detail.component').then(
        (m) => m.CourseDetailComponent
      ),
  },
  {
    path: 'modify-course',
    loadComponent: () =>
      import('./app/modify-course/modify-course.component').then(
        (m) => m.ModifyCourseComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).then(() => console.log('Bootstrap successful'));
