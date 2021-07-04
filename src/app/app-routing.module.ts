import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent} from './courses-list/courses-list.component';
import { CoursesMaterialComponent } from './courses-material/courses-material.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'courseslist',
    component: CoursesListComponent
  },
  {
    path: 'CoursesMaterial',
    component: CoursesMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
