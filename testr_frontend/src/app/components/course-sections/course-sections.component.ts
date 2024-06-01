import { Component, OnInit } from '@angular/core';
import { TestrService } from '../../services/testr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course';
import { Section } from '../../interfaces/section';
import { Question } from '../../interfaces/question';

@Component({
  selector: 'app-course-sections',
  templateUrl: './course-sections.component.html',
  styleUrls: ['./course-sections.component.css']
})
export class CourseSectionsComponent implements OnInit {
  questions: Question[] = [];
  course: Course = {} as Course;
  sections: Section[] = [];
  actual_section: Section = {} as Section;
  error_message: string = '';

  constructor(
    private testrService: TestrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.testrService.getCourse(id).subscribe((course) => {
        this.course = course;
      });

      this.testrService.getSections(id).subscribe((sections_set) => {
        this.sections = sections_set;
      });
    });
  }

  funcaoNoTS(index: number): string {
    // Aqui você pode usar o índice para acessar a seção correspondente ou fazer o que precisar
    console.log('Índice:', index);
    // Faça o que precisar com o índice ou a seção correspondente
    return 'Resultado da função para a seção ' + index;
  }
}
