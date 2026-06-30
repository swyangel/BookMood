import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-cards.html',
  styleUrls: ['./dashboard-cards.css']
})
export class DashboardCardsComponent {

  @Input() titulo: string = '';
  @Input() valor: any;
  @Input() icone: string = '';
  @Input() cor: string = '';

} 

