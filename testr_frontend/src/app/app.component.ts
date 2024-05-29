import { Component, OnInit } from '@angular/core';
import { TestrService } from './services/testr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  isLoggedIn: boolean = false;
  username: string = '';

  constructor(private testrService: TestrService) { }

  ngOnInit() {
    this.testrService.isAuthenticated().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      if (isLoggedIn) {
        this.testrService.whoAmI().subscribe(resp => {
          this.username = resp.user.username;
        });
      }
    });
  }

  logout() {
    this.testrService.logout()
      .subscribe(() => {
        console.log('Logout successful');
        this.isLoggedIn = false;
        this.username = '';
        // redirecionar para a home
        window.location.href = '/';
      }, error => {
        console.error('Logout failed:', error);
        // Tratar erros, se necessário
      });
  }
}