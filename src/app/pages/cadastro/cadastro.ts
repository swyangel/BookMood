import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css']
})
export class CadastroComponent {
  usuario = { email: '', password: '' };
  mensagem: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar() {
    this.http.post('http://localhost:3000/cadastro', this.usuario).subscribe({
      next: () => {
        this.mensagem = 'Usuário cadastrado com sucesso!';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.mensagem = 'Erro ao cadastrar. Verifique os campos.';
        console.error(err);
      }
    });
  }
}