const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const cors = require('cors');

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

app.use(cors());

// Usuários e senhas mock
const mockUsers = [
  { email: 'user1@example.com', password: 'Password@123' },
  { email: 'user2@example.com', password: 'Secure#456' },
];

// Endpoint para login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Validação simples do usuário
  const user = mockUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return res.status(200).json({ message: 'Login bem-sucedido!' });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas.' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
