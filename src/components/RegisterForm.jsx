import { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('ALUMNO'); // o PROPIETARIO

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/register', {
        email,
        nombre,
        password,
        rol
      });
      alert('Usuario registrado correctamente');
    } catch (error) {
      alert('Error al registrar usuario');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} required />
      <select value={rol} onChange={e => setRol(e.target.value)}>
        <option value="ALUMNO">Alumno</option>
        <option value="PROPIETARIO">Propietario</option>
      </select>
      <button type="submit">Registrarse</button>
    </form>
  );
}

export default RegisterForm;
