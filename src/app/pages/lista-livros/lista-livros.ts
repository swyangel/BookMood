import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { LivroService } from '../../services/livro.service';

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './lista-livros.html', 
  styleUrls: ['./lista-livros.css']
})
export class ListaLivrosComponent implements OnInit {
  livros: any[] = [];
  carregando: boolean = true;

  constructor(private livroService: LivroService) {}

  ngOnInit() {
    this.livros = [
      { id: 1, titulo: 'Jogos vorazes', autor: 'Suzanne Collins', capa: '🏹' },
      { id: 2, titulo: 'Estilhaça-me', autor: 'Tahereh Mafi', capa: '👁️' },
      { id: 3, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', capa: '🎸' }
    ];
    
    this.carregando = false;
  }
}