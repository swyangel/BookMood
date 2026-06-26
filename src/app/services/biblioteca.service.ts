import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {
  private apiUrl = 'http://localhost:3000/biblioteca'; 

  constructor(private http: HttpClient) {}

  private getHeaders() {
  const token = localStorage.getItem('token') || localStorage.getItem('auth_token');
    console.log('Token enviado:', token);
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
  }

  adicionarLivro(livroId: number, status: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { livroId, status }, this.getHeaders());
  }

  atualizarStatus(livroId: number, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${livroId}`, { status }, this.getHeaders());
  }

  removerLivro(livroId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${livroId}`, this.getHeaders());
  }

  listarBiblioteca(): Observable<any> {
    return this.http.get(`${this.apiUrl}`, this.getHeaders());
  }
}