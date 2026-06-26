import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]) 
  });

  mensagemErro: string = '';
  carregando: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    if (this.loginForm.valid) {
      this.carregando = true;
      this.mensagemErro = '';

      this.authService.fazerLogin(this.loginForm.value).subscribe({
        next: (resposta) => {
          this.authService.salvarToken(resposta.token);
          this.router.navigate(['/dashboard']); 
        },
        error: (erro) => {
          this.carregando = false;
          this.mensagemErro = 'E-mail ou senha incorretos.';
          console.error('Erro de login:', erro);
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get email() { return this.loginForm.get('email') as FormControl; }
  get password() { return this.loginForm.get('password') as FormControl; } 
}