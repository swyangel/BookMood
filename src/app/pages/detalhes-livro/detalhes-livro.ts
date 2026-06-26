import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LivroService } from '../../services/livro.service';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-detalhes-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-livro.html',
  styleUrls: ['./detalhes-livro.css']
})
export class DetalhesLivroComponent implements OnInit {
  livroId!: number;
  livro: any = null;
  statusAtual: string = 'Quero Ler';
  mensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private livroService: LivroService,
    private bibliotecaService: BibliotecaService 
  ) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.livroId = idParam ? Number(idParam) : 1;
    this.carregarDetalhes();
  }

  carregarDetalhes() {
    const baseDados: any = {
      1: { id: 1, titulo: 'Jogos vorazes', autor: 'Suzanne Collins', sinopse: 'Em um futuro distópico, Katniss Everdeen se voluntaria para substituir sua irmã nos Jogos Vorazes, uma luta mortal televisionada.' },
      2: { id: 2, titulo: 'Estilhaça-me', autor: 'Tahereh Mafi', sinopse: 'Juliette tem um toque letal. Trancada por anos, ela se vê no centro de um conflito político onde seu poder pode ser a arma final.' },
      3: { id: 3, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', sinopse: 'Acompanhe a história de Kvothe, um músico talentoso e arcanista renomado, que se torna a figura mais famosa de seu mundo.' }
    };

    this.livro = baseDados[this.livroId] || baseDados[1];
  }

  mudarStatus(novoStatus: string) {
  this.bibliotecaService.adicionarLivro(this.livroId, novoStatus).subscribe({
      next: () => {
        this.statusAtual = novoStatus;
        this.mensagem = `Livro movido para: ${novoStatus}`;
        setTimeout(() => this.mensagem = '', 3000);
      },
      error: (err: any) => { 
        console.error('Erro ao atualizar status:', err);
        this.mensagem = 'Erro ao atualizar status. Tente novamente.';
      }
    });
  }
}