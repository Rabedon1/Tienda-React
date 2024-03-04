import React from 'react';

const LogIn = () => {
    return (
        <div>
            <div className="container" id="container">
  <div className="form-container sign-up">
    <form id="registroForm">
      <h1>Crear Cuenta</h1>
      <input
        placeholder="Nombre"
        type="text"
        id="nombre"
        pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+"
        title="Solo se permiten letras y espacios "
        name="nombre"
        required=""
      />
      <input
        placeholder="Apellido"
        type="text"
        id="apellidos"
        pattern="[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+"
        title="Solo se permiten letras y espacios "
        name="apellidos"
        required=""
      />
      <input
        placeholder="Correo"
        type="email"
        id="correo"
        name="correo"
        required=""
      />
      <input
        placeholder="Contraseña"
        type="password"
        id="contraseña"
        name="contraseña"
        required=""
      />
      <button type="button" onclick="registrar()">
        Registrarse
      </button>
    </form>
  </div>
  <div className="form-container sign-in">
    <form id="inicioSesionForm">
      <a href="../index.html">
        <img
          className="imgLogo"
          src="../imagenes/logoNegro.png"
          width="100px"
          alt="Ideart"
        />
      </a>
      <h1>Iniciar Sesión</h1>
      <input
        placeholder="Correo"
        type="email"
        id="email"
        name="email"
        required=""
      />
      <input
        placeholder="Contraseña"
        type="password"
        id="contrasena"
        name="contrasena"
        required=""
      />
      <button type="button" onclick="iniciarSesion()">
        Iniciar Sesión
      </button>
    </form>
  </div>
  <div className="toggle-container">
    <div className="toggle">
      <div className="toggle-panel toggle-left">
        <h1>Hola de nuevo</h1>
        <p>
          Ingresa tus datos personales para acceder a los servicios de Ideart
        </p>
        <button className="hidden" id="login">
          Iniciar Sesión
        </button>
      </div>
      <div className="toggle-panel toggle-right">
        <h1>Hola!</h1>
        <p>
          Registrate con tus datos personales para acceder a los servicios de
          Ideart
        </p>
        <button className="hidden" id="register">
          Registrarse
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default LogIn;