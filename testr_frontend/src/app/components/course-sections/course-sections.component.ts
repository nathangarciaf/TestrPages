import { Component, OnInit } from '@angular/core';
import { TestrService } from '../../services/testr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course';
import { Section } from '../../interfaces/section';
import { Questiont } from '../../interfaces/questiont';

@Component({
  selector: 'app-course-sections',
  templateUrl: './course-sections.component.html',
  styleUrls: ['./course-sections.component.css']
})
export class CourseSectionsComponent implements OnInit {
  course: Course = {} as Course;
  sections: Section[] = [];
  questions: Questiont[] = [];
  error_message: string = '';

  constructor(
    private testrService: TestrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.testrService.isAuthenticated().subscribe(isLoggedIn => {
      if (!isLoggedIn) {
        this.router.navigate(['/login']);
      }
    });

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
  getQuestions(id:number) {
    this.testrService.getQuestionst(this.sections[id].id).subscribe((question_set) => {
      this.questions = question_set;
    });
  }
}
