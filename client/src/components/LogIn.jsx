import React, { useState } from 'react';
import './Login.css'
import logoNegro from '../image/logoNegro.png';

const LoginRegistro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Lógica para iniciar sesión
  };

  const handleRegistroSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar un nuevo usuario
  };

  return (
    <div className="login-registro-container">
      <div className="login-section">
      <div className="logo-container">
        <img src={logoNegro} width="100px" alt="Ideart" />
      </div>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLoginSubmit}>
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Iniciar sesión</button>
        </form>
      </div>
      <div className="linea-vertical"></div>
      <div className="registro-section">
        <h2>Registro</h2>
        <form onSubmit={handleRegistroSubmit}>
          <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default LoginRegistro;
