------Descrição do meu projeto------

Dor que o sistema resolve: Faço parte de uma comunidade de leitura, e algo que faz falta no dia a dia de nós leitores é o tipo de aplicação que procuro construir, com um sistema inovador que permite relacionar sua leitura com seu estado emocional ou o momento que está vivendo. O BookMood permite acompanhar leituras, compartilhar experiências e visualizar estatísticas pessoais por meio de um DASHBOARD.

Funcionalidades do Sistema: 
Cadastro de usuário; - ✅
Login; - ✅
Listagem de livros; - ✅
Pesquisa de livros;
Ver detalhes; - ✅
Adicionar livros a biblioteca;
Gerenciar status (Quero ler/Lendo/Lido); - ✅
Avaliar livros de 1 a 5 estrelas;
Adicionar comentários;
Registrar humor da leitura; 
Recomendação de livros com base no humor semanal;
Resumo de quantos livros foram lidos; ✅

Telas:
Login; - ✅
Cadastro; - ✅
Detalhes do livro; - ✅
Biblioteca pessoal; - ✅
Perfil;
Dashboard; - ✅

Components:
CardLivroComponent - Exibe um livro; - ✅
ListaLivrosComponent - Lista de livros; - ✅
AvaliacaoComponent - Exibe uma avaliação;
FormAvaliacaoComponent - Formulário para avaliar livro;
DashboardCardsComponent - Cards com indicadores; - ✅
GraficoHumorComponent - Distribuição dos humores;
GraficoLeiturasComponent - Livros lidos por mês;
GraficoGenerosComponent - Gêneros mais lidos;

Services:
AuthService - Login/Cadastro/Logout; - ✅
UsuarioService - Buscar usuário/Editar perfil;
LivroService - Listar livros - ✅
BibliotecaService - Adicionar livro à biblioteca/Atualizar status/Remover livro;
AvaliacaoService - Criar avaliação/Editar avaliação/Excluir avaliação;
DashboardService - Gerar estatísticas/Dados dos gráficos;


Observações extras: Vou adicionar novas rotas e tabela para: Livros, Biblioteca pessoal, Avaliações e Dashboard. 

-------- CONSIDERAÇÕES -----------

O css desse trabalho foi 100% gerado por IA, foquei totalmente em desenvolver o Typescript por trás dessa aplicação, como pode ver, dei check em algumas coisas que consegui fazer e as outras nao foi possivel por falta de tempo, também tive apoio da IA no gerenciamento de rotas, o que mais tive dificuldade nesse trabalho. Desenvolvi tanto o FRONT quanto o BACK END desta aplicação.