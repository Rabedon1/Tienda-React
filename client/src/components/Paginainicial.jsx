import React from 'react';
import gigantografia from '../image/gigantografia.jpeg';
import Gauder from '../image/Gauder.jpeg';
import imprenta from '../image/imprenta.jpeg';
import sellosCompleta from '../image/sellosCompleta.png';
import logo from '../image/logo.png';

const Paginainicial = () => {
    return (
        <div>
            <>
  <div className="barra">
    <div className="progreso" />
  </div>
  <section className="nuestrosServicios">
    <img
      className="imgNuestosServicios"
      src={gigantografia}
      alt="Gigantografia"
    />
    <img
      className="imgNuestosServicios"
      src={Gauder}
      alt="gauder"
    />
    <img
      className="imgNuestosServicios"
      src={imprenta}
      alt="Gigantografia"
    />
    <img
      className="imgNuestosServicios"
      src={sellosCompleta}
      alt="Gigantografia"
    />
  </section>
  <section className="personalizar">
    <h1>Personaliza tu servicio de impresión digital</h1>
    <p>
      Somos una empresa puntera en tecnología para personalizacion de
      Gigantografías, impresiones con láser, encuadernados y otros servicios que
      venimos prestando con gran trayectoria en el Ecuador. Si presenta alguna
      duda no dude en cominicarse con nosotros.
    </p>
    <form action="" id="Formulario" />
    <div className="options-container">
      <button
        id="impresion_laser"
        value="impresion_laser"
        onclick="mostrarFormulario(this)"
      >
        Impresion Laser
      </button>
      <button
        id="impresion"
        value="impresiones"
        onclick="mostrarFormulario(this)"
      >
        Impresion
      </button>
      <button id="rotulos" value="rotulos" onclick="mostrarFormulario(this)">
        Rotulo
      </button>
      <button
        id="gigantografias"
        value="gigantografias"
        onclick="mostrarFormulario(this)"
      >
        Gigantografia
      </button>
      <button
        id="encuadernado"
        value="encuadernado"
        onclick="mostrarFormulario(this)"
      >
        Encuadernado
      </button>
    </div>
    <div id="formulario" style={{ display: "none" }}>
      {/* Aquí irá el formulario generado dinámicamente */}
    </div>
  </section>
  <div className="whatsapp-bar">
    <p>Cualquier duda, contáctenos en WhatsApp:</p>
    <a
      className="whatsapp-link"
      href="https://api.whatsapp.com/send?phone=%2B593998015039&data=ARCb65A4eXx7eDae6wEoxDeo_oO3_pC1xil-WA8JNFXsdyO79f9LyPNHr3fX1UUYEwAY_vcAZUJ0SPuQbjGHEIgT1mLSLGJiqJriFfny1y8zDwtrF4kJZ2_ZGoCMiIkzIoBZumB8nt-z6QDoVRD0I91mXw&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR3_usdqt_OPkU_cIubQdqZD0fhL4FiNioXH8YC5UJCY7-QJgMlzsi4_AXw"
    >
      Enviar mensaje de WhatsApp
    </a>
  </div>
  <section className="infoAdicional">
    <div className="logo">
      <img src={logo} alt="logo" />
      <p> </p>
      <i className="fa-regular fa-copyright" />
      <p>Marca registrada</p>
    </div>
    <div className="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7978508208053!2d-78.489262!3d-0.18353339999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a628647a341%3A0x4b52103e3b7457d8!2sIdeart%20-%20Sellos%20%26%20Sellos!5e0!3m2!1ses-419!2sec!4v1707421297345!5m2!1ses-419!2sec"
        width={600}
        height={600}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  </section>
  <footer>
    <div className="info">
      <p>Dirección: Av. de la República 1798, Quito 170135, Ecuador</p>
    </div>
    <div className="horarios">
      <p>Horarios:</p>
      <ul>
        <li>
          <strong>Lunes - Viernes:</strong> 9:00 AM - 6:00 PM
        </li>
        <li>
          <strong>Sábado:</strong> 10:00 AM - 2:00 PM
        </li>
      </ul>
    </div>
    <div className="contacto">
      <p>Contacto: sellosideart@gmail.com | Teléfono: +593 99 8030810</p>
    </div>
    <div className="redes-sociales">
      <div className="iconos-sociales">
        <a
          className="social-mediaImg"
          href="https://www.facebook.com/IdeartSellosSellos/"
        >
          <i className="fa-brands fa-instagram" style={{ color: "#c2ccdf" }} />
        </a>
        <a
          className="social-mediaImg"
          href="https://www.facebook.com/IdeartSellosSellos/"
        >
          <i className="fa-brands fa-facebook-f" style={{ color: "#bfc3cb" }} />
        </a>
      </div>
    </div>
  </footer>
  
</>

        </div>
    );
};

export default Paginainicial;