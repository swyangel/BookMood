import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivroComponent } from '../../components/card-livro/card-livro';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [CommonModule, CardLivroComponent],
  templateUrl: './livros.html',
  styleUrls: ['./livros.css']
})
export class LivrosComponent implements OnInit {
  listaDeLivros: any[] = [];
  carregando: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.listaDeLivros = [
        { id: 1, titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', genero: 'Fantasia', capa: 'https://images.unsplash.com/photo-1629196914204-18471415dfb0?w=500&q=80' },
        { id: 2, titulo: '1984', autor: 'George Orwell', genero: 'Ficção Científica', capa: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&q=80' },
        { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Romance', capa: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&q=80' },
        { id: 4, titulo: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry', genero: 'Infantil', capa: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&q=80' }
      ];
      this.carregando = false;
    }, 1500);
  }

  adicionarAosFavoritos(livro: any) {
    alert(`O livro "${livro.titulo}" foi adicionado aos favoritos no BookMood!`);
  }
}