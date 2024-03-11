import './ClienteInfo.css'
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';

const ClienteInfo = ({ isLoggedIn, userData }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedData, setEditedData] = useState({
    nombre: userData.nombre,
    apellido: userData.apellido,
    email: userData.email,
  });

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({
      ...editedData,
      [name]: value,
    });
  };

  const validateName = (name) => {
    return /^[a-zA-Z]+$/.test(name);
  };
  
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  const validatePhoneNumber = (phone) => {
    return /^09\d{8}$/.test(phone);
  };
  
  const validateDateOfBirth = (date) => {
    const birthDate = new Date(date);
    const currentYear = new Date().getFullYear();
    return (
      birthDate.getFullYear() >= 1934 &&
      birthDate.getFullYear() <= 2003 &&
      birthDate <= new Date(currentYear - 18, 11, 31) &&
      birthDate >= new Date(1900, 0, 1)
    );
  };
  
  const handleSave = async () => {
    // Validar datos antes de guardar
    if (!validateName(editedData.nombre)) {
      alert('El nombre solo debe contener letras.');
      return;
    }
    if (!validateName(editedData.apellido)) {
      alert('El apellido solo debe contener letras.');
      return;
    }
    if (!validateEmail(editedData.email)) {
      alert('El formato del correo electrónico es incorrecto.');
      return;
    }
    if (!validatePhoneNumber(editedData.telefono)) {
      alert('El teléfono debe contener 10 números y empezar con "09".');
      return;
    }
    if (!validateDateOfBirth(editedData.nacimiento)) {
      alert('La fecha de nacimiento debe estar entre 1934 y 2003.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/actualizarCliente', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });
      if (response.ok) {
        alert('Datos actualizados correctamente');
        setEditMode(false);
      } else {
        alert('Error al actualizar datos del cliente');
      }
    } catch (error) {
      alert('Error al conectar con el servidor:', error);
    }
  };
  
  if (!isLoggedIn) {
    return <Navigate to="/LogIn" />;
  }

  return (
    <div>
      <h2>Información del cliente</h2>
      {editMode ? (
        <form>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={editedData.nombre}
            onChange={handleChange}
          />
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={editedData.apellido}
            onChange={handleChange}
          />
          <label>Teléfono:</label>
          <input
            type="text"
            name="telefono"
            value={editedData.telefono}
            onChange={handleChange}
          />
          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="nacimiento"
            value={editedData.nacimiento}
            onChange={handleChange}
          />
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleChange}
          />
          <button type="button" onClick={handleSave}>Guardar</button>
        </form>
      ) : (
        <table className='cliente-info-table'>
          <tbody>
            <tr>
              <td>Nombre:</td>
              <td>{userData.nombre}</td>
            </tr>
            <tr>
              <td>Apellido:</td>
              <td>{userData.apellido}</td>
            </tr>
            <tr>
              <td>Correo electrónico:</td>
              <td>{userData.email}</td>
            </tr>
            <tr>
              <td>Telefono:</td>
              <td>{userData.telefono}</td>
            </tr>
            <tr>
              <td>Fecha de Nacimiento:</td>
              <td>{userData.nacimiento}</td>
            </tr>
          </tbody>
        </table>
      )}
      {!editMode && (
        <button onClick={handleEdit}>Editar datos</button>
      )}
    </div>
  );
};

export default ClienteInfo;