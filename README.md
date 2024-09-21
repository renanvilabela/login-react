# login-react

# Aplicação de Login com React e Node.js (Servidor Mock)

## Descrição
Esta aplicação é uma tela de login simples desenvolvida com **React** no front-end e **Node.js** no back-end. O servidor Node.js simula a validação de credenciais usando um mock de usuários. O front-end envia requisições de login para o servidor, que valida as credenciais e retorna respostas de sucesso ou erro.

### Funcionalidades:
- Validação de formulário no front-end (formato de e-mail e regras para senha).
- Feedback ao usuário com mensagens de erro claras para validações que falharem.
- Comunicação com o back-end via requisições `POST` para validar login.
- Estilização simples com CSS e animação de fundo.

## Tecnologias Utilizadas:
- **React** para a interface do usuário (front-end).
- **Node.js** com **Express** para o servidor mock (back-end).
- **CORS** para permitir a comunicação entre front-end e back-end rodando em diferentes portas.
- **Fetch API** para enviar requisições HTTP do front-end para o back-end.

## Requisitos para Rodar o Projeto
- **Node.js** (versão 14.x ou superior).
- **NPM** (Node Package Manager).

## Como Rodar a Aplicação

### 1. Clonar o Repositório

```bash
git clone https://github.com/renanvilabela/login-react

### 2. Rodar o Servidor Node.js (Mock)

1 - Navegue até a pasta do servidor Node.js
- cd mock

2 - Instale as dependencias
- npm install

3 - Inicie o servidor
- node server.js

4 - Mensagem que deverá aparecer no terminal
- Servidor rodando na porta 3000

### 3. Rodar o Front-End (React)

1 - Abra um novo terminal e navegue até a pasta do front-end
- cd frontend

2 - Instale as dependências do React
- npm install

3- Inicie o servidor de desenvolvimento React
- PORT=3001 npm start

4- o front-end estará rodando na porta 3001
- http://localhost:3001

### 4. Testar o Login
1- Na tela de login, insira as credenciais de um dos usuários mock definidos no servidor Node.js:

Usuário 1:
E-mail: user1@example.com
Senha: Password@123
Usuário 2:
E-mail: user2@example.com
Senha: Secure#456

2- Se as credenciais estiverem corretas, uma mensagem de "Login bem-sucedido!" será exibida.

3- Se as credenciais forem inválidas, uma mensagem de erro será retornada.



