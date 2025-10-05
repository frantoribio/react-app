import { useState } from 'react';
import axios from 'axios';

function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/auth/change-password', {
        oldPassword,
        newPassword
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      alert('Contraseña actualizada correctamente');
    } catch (error) {
      alert('Error al cambiar la contraseña');
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <input type="password" placeholder="Contraseña actual" value={oldPassword} onChange={e => setOldPassword(e.target.value)} required />
      <input type="password" placeholder="Nueva contraseña" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
      <button type="submit">Cambiar contraseña</button>
    </form>
  );
}

export default ChangePasswordForm;
