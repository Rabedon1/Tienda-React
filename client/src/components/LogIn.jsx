import React, { useState } from 'react';
import './Login.css'
import logoNegro from '../image/logoNegro.png';

const LoginRegistro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Validación de campos vacíos
    if (!email || !password) {
      alert('Por favor ingresa tu correo electrónico y contraseña.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        alert('inicio de sesion exitoso bienvenido!')
      } else {
        // Credenciales inválidas
        alert('Correo electrónico o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };
  

  const handleRegistroSubmit = async (e) => {
    e.preventDefault();
    // Validación de campos vacíos
    if (!nombre || !apellido || !email || !password) {
      alert('Por favor completa todos los campos.');
      return;
    }
  
    // Validación de formato de nombre y apellido
    const nombreRegExp = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!nombreRegExp.test(nombre) || !nombreRegExp.test(apellido)) {
      alert('El nombre y el apellido no pueden contener números ni caracteres especiales.');
      return;
    }
  
    // Validación de formato de correo electrónico
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegExp.test(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }
  
    // Validación de formato de contraseña
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegExp.test(password)) {
      alert('La contraseña debe tener al menos 8 caracteres y contener al menos un carácter especial, una letra y un número.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });
      if (response.ok) {
        // Registro exitoso
        console.log('Usuario registrado correctamente');
      } else {
        // Error al registrar
        console.error('Error al registrar usuario');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
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
