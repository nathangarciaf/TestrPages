import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseComponent } from './components/course/course.component';
import { CourseSectionsComponent } from './components/course-sections/course-sections.component';
import { QuestionComponent } from './components/question/question.component';
import { SectionQuestionsComponent } from "./components/section-questions/section-questions.component";

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'course/:id', component: CourseSectionsComponent },
  { path: 'section/:id', component: SectionQuestionsComponent },
  { path: 'question/:id', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }