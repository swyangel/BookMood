import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [style.border-color]="cor">
      <span class="icone">{{ icone }}</span>
      <h3>{{ titulo }}</h3>
      <p class="valor">{{ valor }}</p>
    </div>
  `,
  styles: [`
    .card { padding: 20px; border: 2px solid; border-radius: 12px; background: white; text-align: center; }
    .icone { font-size: 24px; }
    .valor { font-weight: bold; font-size: 18px; }
  `]
})
export class DashboardCardsComponent {
  @Input() titulo: string = '';
  @Input() valor: any;
  @Input() icone: string = '';
  @Input() cor: string = '';
}