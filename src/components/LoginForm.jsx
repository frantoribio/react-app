import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        alert(`Bienvenido, rol: ${res.data.rol}`);
      })
      .catch(() => alert('Credenciales inválidas'));
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} required />
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
