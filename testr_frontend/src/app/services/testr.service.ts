import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TestrService {
  private API_URL: string = 'http://localhost:8000/';

  constructor(private httpClient: HttpClient) { }

  //Course API
  getQuestions(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}sections/${id}/questions`, { withCredentials: true });
  }

  //Course API
  getQuestion(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}questions/${id}`, { withCredentials: true });
  }

  getCourses(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + 'courses', { withCredentials: true });
  }

  // método para buscar uma pergunta específica com autenticação por sessão
  getCourse(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}courses/${id}`, { withCredentials: true });
  }

  // método para buscar as opções de uma pergunta com autenticação por sessão
  getSections(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}courses/${id}/sections`, { withCredentials: true });
  }

  getSection(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.API_URL}sections/${id}`, { withCredentials: true });
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + 'api-auth/login', { username, password }, { withCredentials: true });
  }
  
  logout(): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + 'api-auth/logout', {}, { withCredentials: true });
  }

  register(username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.API_URL + 'api-auth/register', { username, password }, { withCredentials: true });
  }

  whoAmI(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL + 'api-auth/user', { withCredentials: true });
  }

  isAuthenticated(): Observable<boolean> {
    return this.httpClient.get<any>(this.API_URL + 'api-auth/is-authenticated', { withCredentials: true })
      .pipe(
        map(res => res.authenticated),
        catchError(err => {
          console.error('Erro ao verificar autenticação:', err);
          return of(false);
        })
      );
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}
