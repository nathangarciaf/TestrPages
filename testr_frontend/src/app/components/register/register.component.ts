import { Component } from '@angular/core';
import { TestrService } from '../../services/testr.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private testrService: TestrService) {}

  register() {
    if (this.username && this.password) {
      this.testrService.register(this.username, this.password)
        .subscribe(
          (response) => {
            console.log('Registration successful:', response);
            // Aqui você pode redirecionar o usuário para outra página
          },
          (error) => {
            console.error('Registration failed:', error);
            this.errorMessage = 'Falha no Registro.';
          }
        );
    } else {
      console.error('Username and password are required');
      // Exibir mensagem de erro ao usuário
    }
  }
}
