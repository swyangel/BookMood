import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  cadastrarUsuario(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cadastro`, dados);
  }

  fazerLogin(dados: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, dados);
  }

  listarUsuarios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  salvarToken(token: string) {
    localStorage.setItem('token', token);
  }

  estaLogado(): boolean {
    return !!localStorage.getItem('token_api');
  }

  sair(): void {
    localStorage.removeItem('token_api');
    this.router.navigate(['/login']);
  }
}