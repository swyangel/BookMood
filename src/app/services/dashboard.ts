import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  obterEstatisticasUsuario(): Observable<any> {
    const dadosMock = {
      nome: 'Leitor',
      livrosLidos: 14,
      lendoAtualmente: 2,
      humorSemanal: '✨ Inspirado',
      paginasLidas: 3240
    };
    
    return of(dadosMock).pipe(delay(800)); 
  }
}