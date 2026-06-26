import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-biblioteca-pessoal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biblioteca-pessoal.html',
  styleUrls: ['./biblioteca-pessoal.css']
})
export class BibliotecaPessoalComponent implements OnInit {
  meusLivros: any[] = [];

  constructor(
    private bibliotecaService: BibliotecaService,
    private cdr: ChangeDetectorRef // Injetado para forçar a atualização da tela
  ) {}

  ngOnInit() {
    this.carregarMeusLivros();
  }

  carregarMeusLivros() {
    this.bibliotecaService.listarBiblioteca().subscribe({
      next: (data: any) => {
        this.meusLivros = data;
        // Força o Angular a renderizar o HTML após receber os dados
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error('Erro ao carregar biblioteca:', err)
    });
  }
}