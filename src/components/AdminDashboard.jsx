import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [usuarios, setUsuarios] = useState([]);
  const [editando, setEditando] = useState(null);
  const [formData, setFormData] = useState({ email: '', rol: '' });

  // Obtener usuarios al cargar
  useEffect(() => {
    axios.get('http://localhost:8080/api/usuarios', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => setUsuarios(res.data))
    .catch(() => alert('Error al cargar usuarios'));
  }, []);

  // Eliminar usuario
  const eliminarUsuario = id => {
    if (window.confirm('¿Seguro que deseas eliminar este usuario?')) {
      axios.delete(`http://localhost:8080/api/usuarios/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(() => setUsuarios(usuarios.filter(u => u.id !== id)))
      .catch(() => alert('Error al eliminar usuario'));
    }
  };

  // Iniciar edición
  const editarUsuario = usuario => {
    setEditando(usuario.id);
    setFormData({ email: usuario.email, rol: usuario.rol });
  };

  // Guardar cambios
  const guardarCambios = id => {
    axios.put(`http://localhost:8080/api/usuarios/${id}`, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(() => {
      setUsuarios(usuarios.map(u => u.id === id ? { ...u, ...formData } : u));
      setEditando(null);
    })
    .catch(() => alert('Error al actualizar usuario'));
  };

  return (
    <div className="container mt-5">
      <h2>Gestión de Usuarios</h2>
      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>
                {editando === usuario.id ? (
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                ) : (
                  usuario.email
                )}
              </td>
              <td>
                {editando === usuario.id ? (
                  <select
                    value={formData.rol}
                    onChange={e => setFormData({ ...formData, rol: e.target.value })}
                  >
                    <option value="ADMIN">ADMIN</option>
                    <option value="ALUMNO">ALUMNO</option>
                    <option value="PROPIETARIO">PROPIETARIO</option>
                  </select>
                ) : (
                  usuario.rol
                )}
              </td>
              <td>
                {editando === usuario.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={() => guardarCambios(usuario.id)}>Guardar</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditando(null)}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => editarUsuario(usuario)}>Editar</button>
                    <button className="btn btn-danger btn-sm" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
