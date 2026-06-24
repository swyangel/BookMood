import { Routes } from '@angular/router';

// Importando os componentes das suas páginas
import { HomeComponent } from './pages/home/home'; // Ajuste se o nome do arquivo tiver .component no final
import { LoginComponent } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';
import { LivrosComponent } from './pages/livros/livros'; // A página que criamos!
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },

  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'livros', 
    component: LivrosComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'cadastro', 
    component: CadastroComponent 
  },

  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },

  { 
    path: '**', 
    redirectTo: 'home' 
  }
];