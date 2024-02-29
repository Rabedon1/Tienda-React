import React from 'react';

const Empresa = () => {
    return (
        <div>
            <>
  
  <div className="barra">
    <div className="progreso" />
  </div>
  <div className="contenedor">
    <div className="imagen-titulo">
      <img src="../imagenes/bg1.jpg" alt="Imagen Principal" />
      <h1>IDEART</h1>
    </div>
    <div className="seccionMaster">
      <div className="seccion">
        <div className="imagen-subtitulo">
          <img src="../imagenes/selloHistoria.png" alt="Imagen 1" />
          <h2>Historia</h2>
          <p>
            Hace más de una década y media, un pequeño equipo de apasionados por
            la impresión y la personalización se unió para dar vida a Ideart.
            Con una visión clara de proporcionar productos de calidad y
            servicios personalizados excepcionales, comenzamos nuestro viaje en
            el mundo de la imprenta con determinación y entusiasmo. Desde
            nuestros modestos comienzos hasta convertirnos en un referente en el
            mercado, cada paso en nuestro viaje ha estado marcado por la
            dedicación a nuestros clientes y la búsqueda constante de la
            excelencia. Durante estos 15 años de operaciones, hemos crecido y
            evolucionado, pero nuestra pasión por ofrecer soluciones creativas y
            de alta calidad nunca ha vacilado.
          </p>
        </div>
        <div className="imagen-subtitulo">
          <img src="../imagenes/SelladorHojas.png" alt="Imagen 2" />
          <h2>Quienes Somos?</h2>
          <p>
            Bienvenido a Ideart: Tu Socio en Imprenta y Personalización En
            Ideart, nos enorgullece ser tu compañero confiable en el mundo de la
            imprenta y la personalización. Durante años, hemos estado sirviendo
            a clientes de todo tipo con productos de alta calidad y servicios de
            personalización excepcionales. Especializados en la venta de sellos,
            almohadillas y tintas, ofrecemos una amplia gama de productos que
            satisfacen las necesidades de empresas, profesionales y clientes
            individuales. Desde sellos automáticos hasta fechadores, nuestra
            colección está diseñada para brindar soluciones precisas y duraderas
            en todas las aplicaciones. Pero no nos detenemos ahí. En Ideart, nos
            apasiona llevar la personalización al siguiente nivel. Más allá de
            los sellos y las almohadillas, ofrecemos servicios de
            personalización en una variedad de materiales, incluyendo madera,
            agendas y acrílicos. Desde grabados personalizados hasta impresiones
            únicas, transformamos tus ideas en realidad.
          </p>
        </div>
      </div>
    </div>
  </div>
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

export default Empresa;