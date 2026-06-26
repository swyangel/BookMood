const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const knexConfig = require('./knexfile');
const knex = require('knex');
const db = knex(knexConfig.development);

const JWT_SECRET = 'labubu_123';

module.exports = function(app) {
  
  const router = express.Router();


  function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
      console.log('Cabeçalho recebido:', authHeader);
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ erro: 'Acesso negado. Token não fornecido.' });
    }

    jwt.verify(token, JWT_SECRET, (erro, usuarioDecodificado) => {
      if (erro) {
        return res.status(403).json({ erro: 'Token inválido ou expirado.' });
      }
      req.usuario = usuarioDecodificado;
      next();
    });
  }


  router.get('/usuarios', verificarToken, async (req, res) => {
    try {
      const users = await db('users').select('id', 'email');
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar usuários.' });
    }
  });

  router.get('/usuarios/:id', verificarToken, async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await db('users').where({ id: userId }).select('id', 'email').first();
      if (!user) return res.status(404).json({ erro: 'Usuário não encontrado.' });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar o usuário.' });
    }
  });

  router.post('/cadastro', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userExists = await db('users').where({ email }).first();
      if (userExists) return res.status(400).json({ erro: 'Este email já está em uso.' });
      const hashedPassword = await bcrypt.hash(password, 10);
      const [newUserId] = await db('users').insert({ email, password: hashedPassword });
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!', id: newUserId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro interno ao cadastrar o usuário.' });
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await db('users').where({ email }).first();
      if (!user) return res.status(401).json({ erro: 'Credenciais inválidas.' });
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) return res.status(401).json({ erro: 'Credenciais inválidas.' });
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });
      res.json({ mensagem: 'Login realizado com sucesso!', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro interno ao realizar o login.' });
    }
  });

  router.get('/api/livros', async (req, res) => {
    try {
      const livros = [
        { id: 1, titulo: 'The Hunger Games', autor: 'Suzanne Collins', capa: '🏹' },
        { id: 2, titulo: 'Shatter Me', autor: 'Tahereh Mafi', capa: '👁️' },
        { id: 3, titulo: 'O Nome do Vento', autor: 'Patrick Rothfuss', capa: '🎸' }
      ];
      res.json(livros);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar livros.' });
    }
  });

router.get('/biblioteca', verificarToken, async (req, res) => {
  try {
    const userId = req.usuario.id;
    
    // O JOIN precisa garantir que busca os dados para o userId correto
    const livros = await db('biblioteca')
      .join('livros', 'biblioteca.livroId', '=', 'livros.id')
      .where('biblioteca.userId', userId)
      .select('livros.*', 'biblioteca.status');
      
    // Responde UMA ÚNICA VEZ com os livros
    return res.json(livros);
  } catch (error) {
    console.error('ERRO:', error);
    // Só responde o erro se a resposta principal ainda não tiver sido enviada
    if (!res.headersSent) {
      return res.status(500).json({ erro: 'Erro ao buscar biblioteca.' });
    }
  }
});

  router.post('/biblioteca', verificarToken, async (req, res) => {
    try {
      const { livroId, status } = req.body;
      const userId = req.usuario.id;
    
      const existente = await db('biblioteca')
        .where({ userId, livroId })
        .first();

      if (existente) {
        await db('biblioteca')
          .where({ userId, livroId })
          .update({ status });
        res.json({ mensagem: 'Status atualizado!' });
      } else {
        await db('biblioteca').insert({ userId, livroId, status });
        res.status(201).json({ mensagem: 'Livro adicionado à biblioteca!' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao processar biblioteca.' });
    }
  });
  app.use('/', router);
  router.post('/biblioteca', verificarToken, async (req, res) => {
  const { livroId, status } = req.body;
  const userId = req.usuario.id;
  const registro = await db('biblioteca').where({ userId, livroId }).first();
  if (registro) {
    await db('biblioteca').where({ id: registro.id }).update({ status });
    return res.json({ mensagem: 'Status atualizado!' });
  } else {
    await db('biblioteca').insert({ userId, livroId, status });
    return res.status(201).json({ mensagem: 'Adicionado à biblioteca!' });
  }
});
};