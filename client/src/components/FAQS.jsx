import React from 'react';

const FAQS = () => {
    return (
        <div>
            <>
  <div className="barra">
    <div className="progreso" />
  </div>
  <h1 id="titulo">Preguntas Frecuentes</h1>
  <div className="contenedorPreguntas">
    <div className="tarjeta">
      <div className="front">¿Cómo puedo realizar un pedido?</div>
      <div className="back">
        <p>
          Para realizar la compra, necesita iniciar sesión en la página, si no
          tiene una cuenta, escoja la opción de registrarse y llene los datos,
          seguido de escoger el producto que desea y la cantidad.
        </p>
      </div>
    </div>
    <div className="tarjeta">
      <div className="front">¿Cómo personalizar mi pedido?</div>
      <div className="back">
        <p>
          Si desea realizar una compra con un producto personalizado, en la
          pagina de inicio escoja la opción "PERSONALIZAR" y llene el formulario
          con las preguntas solicitadas posteriormente nos comunicaremos con
          usted
        </p>
      </div>
    </div>
    <div className="tarjeta">
      <div className="front">¿Cuánta es la demora de un producto?</div>
      <div className="back">
        <p>
          El envio del producto tardara aproximadamente entre 24 a 48 horas,
          dependiendo de la lejanía del punto de entrega.
        </p>
      </div>
    </div>
    <div className="tarjeta">
      <div className="front">¿Cómo puedo realizar un pedido?</div>
      <div className="back">
        <p>
          Para realizar el proceso de entrega del producto, necesita especificar
          en la ventana de proceso de compra el lugar donde debe ser entregado
          el producto, se recomienda ser específico con la dirección e
          información veridica
        </p>
      </div>
    </div>
  </div>
  <section className="opinionClientes" />
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

export default FAQS;