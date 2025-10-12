import { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/auth/login', { email, contraseña })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        alert(`Bienvenido, rol: ${res.data.rol}`);
        // Redirigir según el rol
        if (res.data.rol === 'ADMIN') {
          window.location.href = '/admin/AdminDashboard';
        } else if (res.data.rol === 'USER') {
          window.location.href = '/user/home';
        } else if (res.data.rol === 'OWNER') {
          window.location.href = '/owner/panel';
        } 
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
