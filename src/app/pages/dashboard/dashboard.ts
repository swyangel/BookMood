import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Importe isto!
import { DashboardCardsComponent } from '../../components/dashboard-cards/dashboard-cards'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, DashboardCardsComponent], // Adicione RouterLink aqui
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  usuarioNome: string = '';
  cardsData: any[] = [];
  carregando: boolean = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.carregarDados();
  }

  carregarDados() {
    setTimeout(() => {
      this.usuarioNome = 'Leitor';
      this.cardsData = [
        { titulo: 'Livros Lidos', valor: 14, icone: '📚', cor: '#e6e3e5' },
        { titulo: 'Lendo Agora', valor: 2, icone: '📖', cor: '#60a5fa' },
        { titulo: 'Humor Semanal', valor: '✨ Inspirado', icone: '💖', cor: '#a78bfa' },
        { titulo: 'Páginas Lidas', valor: 3240, icone: '🔖', cor: '#34d399' }
      ];
      
      this.carregando = false;
      this.cdr.detectChanges(); 
    }, 800);
  }
}