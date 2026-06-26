import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login'; 
import { DashboardComponent } from './pages/dashboard/dashboard'; 
import { DetalhesLivroComponent } from './pages/detalhes-livro/detalhes-livro';
import { ListaLivrosComponent } from './pages/lista-livros/lista-livros';
import { CadastroComponent } from './pages/cadastro/cadastro'; 
import { AuthGuard } from './guards/auth-guard';
import { BibliotecaPessoalComponent } from './pages/biblioteca-pessoal/biblioteca-pessoal';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'livros', component: ListaLivrosComponent },
  { path: 'livros/:id', component: DetalhesLivroComponent }, 
  { path: 'biblioteca-pessoal', component: BibliotecaPessoalComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' } ,
];