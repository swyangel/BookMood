import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-livro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-livro.html', 
  styleUrls: ['./card-livro.css']
})
export class CardLivroComponent {
  @Input() livro: any; 
  
  @Output() favoritar = new EventEmitter<any>();

  onFavoritar() {
    this.favoritar.emit(this.livro);
  }
}