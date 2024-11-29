import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import {importProvidersFrom, isDevMode} from '@angular/core';
import { CourseListComponent } from './app/course-list/course-list.component';
import { CourseDetailComponent } from './app/course-detail/course-detail.component';
import { ModifyCourseComponent } from './app/modify-course/modify-course.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { provideServiceWorker } from "@angular/service-worker";
import {provideHttpClient} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/Services/in-memory-data.service";




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
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 })),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule, provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
}).catch((err) => console.error(err));
