const express = require('express');
const router = express.Router();
const connection = require('../config/db.js');

// Definir rota de login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar se o usuário existe no banco de dados
  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (err, result) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados:', err);
      res.status(500).send('Erro ao consultar o banco de dados.');
    } else {
      if (result.length > 0) {
        res.status(200).send('Login bem-sucedido!');
      } else {
        res.status(401).send('Credenciais inválidas.');
      }
    }
  });
});

// APIs de CRUD
// Ler todos os clientes
router.get('/clientes', (req, res) => {
  connection.query('SELECT * FROM clientes', (error, results) => {
    if (error) {
      console.error('Erro ao buscar clientes:', error);
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    } else {
      res.json(results);
    }
  });
});

// Criar um cliente
router.post('/clientes', (req, res) => {
  const { nome, nif } = req.body;
  const sql = 'INSERT INTO clientes (nome, nif) VALUES (?, ?)';
  connection.query(sql, [nome, nif], (error, result) => {
    if (error) {
      console.error('Erro ao criar cliente:', error);
      res.status(500).json({ error: 'Erro ao criar cliente' });
    } else {
      res.json({ id: result.insertId, nome, nif });
    }
  });
});

// Atualizar um cliente
router.put('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const { nome, nif } = req.body;
  const sql = 'UPDATE clientes SET nome = ?, nif = ? WHERE id = ?';
  connection.query(sql, [nome, nif, id], (error, result) => {
    if (error) {
      console.error('Erro ao atualizar cliente:', error);
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    } else {
      res.json({ id, nome, nif });
    }
  });
});

// Deletar um cliente
router.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM clientes WHERE id = ?';
  connection.query(sql, [id], (error, result) => {
    if (error) {
      console.error('Erro ao deletar cliente:', error);
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    } else {
      res.json({ id });
    }
  });
});

// Ler todos os fornecedores
router.get('/fornecedores', (req, res) => {
  const query = 'SELECT * FROM fornecedores';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter os dados dos fornecedores:', err);
      return res.status(500).json({ error: 'Erro ao obter os dados dos fornecedores' });
    }

    return res.json(results);
  });
});

// Criar um fornecedor
router.post('/fornecedores', (req, res) => {
  const { nome, nipc } = req.body;
  const sql = 'INSERT INTO fornecedores (nome, nipc) VALUES (?, ?)';
  connection.query(sql, [nome, nipc], (error, result) => {
    if (error) {
      console.error('Erro ao criar fornecedor:', error);
      res.status(500).json({ error: 'Erro ao criar fornecedor' });
    } else {
      res.json({ id: result.insertId, nome, nipc });
    }
  });
});

// Atualizar um fornecedor
router.put('/fornecedores/:id', (req, res) => {
  const { id } = req.params;
  const { nome, nipc } = req.body;
  const sql = 'UPDATE fornecedores SET nome = ?, nipc = ? WHERE id = ?';
  connection.query(sql, [nome, nipc, id], (error, result) => {
    if (error) {
      console.error('Erro ao atualizar fornecedor:', error);
      res.status(500).json({ error: 'Erro ao atualizar fornecedor' });
    } else {
      res.json({ id, nome, nipc });
    }
  });
});

// Rota para deletar fornecedor
router.delete('/fornecedores/:id', (req, res) => {
  const fornecedorId = req.params.id;

  // Executar a exclusão no banco de dados usando a consulta SQL
  const deleteQuery = 'DELETE FROM fornecedores WHERE id = ?';

  connection.query(deleteQuery, [fornecedorId], (err, result) => {
    if (err) {
      console.error('Erro ao deletar fornecedor:', err);
      res.status(500).json({ message: 'Erro ao deletar fornecedor' });
    } else {
      console.log('Fornecedor deletado com sucesso');
      res.status(200).json({ message: 'Fornecedor excluído com sucesso' });
    }
  });
});

// Ler todos os produtos
router.get('/produtos', (req, res) => {
  const query = 'SELECT * FROM produtos';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter os dados dos produtos:', err);
      return res.status(500).json({ error: 'Erro ao obter os dados dos produtos' });
    }

    return res.json(results);
  });
});

// Criar um produto
router.post('/produtos', (req, res) => {
  const { designacao, precoUnitario } = req.body;
  const sql = 'INSERT INTO produtos (designacao, precoUnitario) VALUES (?, ?)';
  connection.query(sql, [designacao, precoUnitario], (error, result) => {
    if (error) {
      console.error('Erro ao criar produto:', error);
      res.status(500).json({ error: 'Erro ao criar produto' });
    } else {
      res.json({ id: result.insertId, designacao, precoUnitario });
    }
  });
});

// Atualizar um produto
router.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const { designacao, precoUnitario } = req.body;
  const sql = 'UPDATE produtos SET designacao = ?, precoUnitario = ? WHERE id = ?';
  connection.query(sql, [designacao, precoUnitario, id], (error, result) => {
    if (error) {
      console.error('Erro ao atualizar produto:', error);
      res.status(500).json({ error: 'Erro ao atualizar produto' });
    } else {
      res.json({ id, designacao, precoUnitario });
    }
  });
});

// Rota para deletar produto
router.delete('/produtos/:id', (req, res) => {
  const produtoId = req.params.id;

  // Executar a exclusão no banco de dados usando a consulta SQL
  const deleteQuery = 'DELETE FROM produtos WHERE id = ?';

  connection.query(deleteQuery, [produtoId], (err, result) => {
    if (err) {
      console.error('Erro ao deletar produto:', err);
      res.status(500).json({ message: 'Erro ao deletar produto' });
    } else {
      console.log('Produto deletado com sucesso');
      res.status(200).json({ message: 'Produto excluído com sucesso' });
    }
  });
});

// Ler todos os usuários
router.get('/usuarios', (req, res) => {
  const query = 'SELECT * FROM usuarios';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao obter os dados dos usuários:', err);
      return res.status(500).json({ error: 'Erro ao obter os dados dos usuários' });
    }

    return res.json(results);
  });
});

// Criar um usuário
router.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  const sql = 'INSERT INTO usuarios (nome, email) VALUES (?, ?)';
  connection.query(sql, [nome, email], (error, result) => {
    if (error) {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    } else {
      res.json({ id: result.insertId, nome, email });
    }
  });
});

// Atualizar um usuário
router.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;
  const sql = 'UPDATE usuarios SET nome = ?, email = ? WHERE id = ?';
  connection.query(sql, [nome, email, id], (error, result) => {
    if (error) {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro ao atualizar usuário' });
    } else {
      res.json({ id, nome, email });
    }
  });
});

// Rota para deletar usuário
router.delete('/usuarios/:id', (req, res) => {
  const usuarioId = req.params.id;

  // Executar a exclusão no banco de dados usando a consulta SQL
  const deleteQuery = 'DELETE FROM usuarios WHERE id = ?';

  connection.query(deleteQuery, [usuarioId], (err, result) => {
    if (err) {
      console.error('Erro ao deletar usuário:', err);
      res.status(500).json({ message: 'Erro ao deletar usuário' });
    } else {
      console.log('Usuário deletado com sucesso');
      res.status(200).json({ message: 'Usuário excluído com sucesso' });
    }
  });
});

module.exports = router;