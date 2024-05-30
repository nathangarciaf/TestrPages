import { Component, OnInit } from '@angular/core';
import { TestrService } from '../../services/testr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../../interfaces/course';
import { Section } from '../../interfaces/section';
import { Questiont } from '../../interfaces/questiont';

@Component({
  selector: 'app-section-questions',
  templateUrl: './section-questions.component.html',
  styleUrls: ['./section-questions.component.css']
})
export class SectionQuestionsComponent implements OnInit {
  section: Section = {} as Course;
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
      this.testrService.getSection(id).subscribe((section) => {
        this.section = section;
      });

      this.testrService.getQuestionst(id).subscribe((questions_set) => {
        this.questions = questions_set;
      });
      
    });
  }
}
