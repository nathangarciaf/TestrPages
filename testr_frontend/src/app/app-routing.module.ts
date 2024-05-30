import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { ResultComponent } from './components/result/result.component';
import { CourseComponent } from './components/course/course.component';
import { CourseSectionsComponent } from './components/course-sections/course-sections.component';

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: CourseSectionsComponent },
  { path: 'question/:id', component: QuestionDetailComponent },
  { path: 'question/:id/result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }