import { useState } from 'react';
import styles from '../src/App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  let validationErrors = {}

  //validação de email
  if(!email) {
    validationErrors.email = 'E-mail não pode estar vazio.';
  }else if (validateEmail(email)) {
    validationErrors.email = 'Formato de email inválido.';
  }

  //validação de senha
  if (!password) {
    validationErrors.password = 'Senha não pode estar vazia.';
  }else if (validatePassword(password)) {
    validationErrors.password = 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.'
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    setMessage('');
  } else {
    setErrors({})
  }
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login bem-sucedido!');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor');
    }
  };

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input id='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input id='senha'
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
      <p>{message}</p>
    </main>
  );
}

export default App;
