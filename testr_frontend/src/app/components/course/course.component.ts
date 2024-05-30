import { Component, OnInit } from '@angular/core';
import { TestrService } from '../../services/testr.service';
import { Router } from '@angular/router';
import { Questiont } from '../../interfaces/questiont';
import { Course } from '../../interfaces/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  questions: Questiont[] = [];
  courses: Course[] = [];

  constructor(private testrService: TestrService, private router: Router) { }

  ngOnInit(): void {
    // Verifica se o usuário está autenticado
    this.testrService.isAuthenticated().subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      } else {
        // Se autenticado, busca as perguntas
        this.testrService.getCourses().subscribe(
          (courses: Course[]) => {
            this.courses = courses;
          },
          error => {
            console.error('Erro ao buscar perguntas:', error);
          }
        );
      }
    });
  }
}
