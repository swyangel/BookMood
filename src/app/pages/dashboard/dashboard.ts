import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardsComponent } from '../../components/dashboard-cards/dashboard-cards'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardCardsComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  usuarioNome: string = '';
  cardsData: any[] = [];
  carregando: boolean = true;


  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    setTimeout(() => {
      this.usuarioNome = 'Leitor';
      
      this.cardsData = [
        { titulo: 'Livros Lidos', valor: 14, icone: '📚', cor: '#f472b6' },
        { titulo: 'Lendo Agora', valor: 2, icone: '📖', cor: '#60a5fa' },
        { titulo: 'Humor Semanal', valor: '✨ Inspirado', icone: '💖', cor: '#a78bfa' },
        { titulo: 'Páginas Lidas', valor: 3240, icone: '🔖', cor: '#34d399' }
      ];
      
      this.carregando = false; 
    }, 800);
  }
}