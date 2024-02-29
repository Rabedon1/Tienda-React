import React from 'react';

const CatalogoSellos = () => {
    return (
        <div>
            <>
  <div className="contenedorImagenPrincipal">
    <img
      className="imagenPrincipal"
      src="../imagenes/fotoGrandeCatalogo.png"
      alt="Foto grande"
    />
  </div>
  <h1>SELLOS</h1>
  <nav className="nav2">
    <button className="toggle">
      <i className="fa-solid fa-bars" />
    </button>
    <ul className="navMenu">
      <li className="navMenuItem">
        <a href="../HTML/almohadilla.html" className="navMenuLink navLink">
          almohadillas
        </a>
      </li>
      <li className="navMenuItem">
        <a href="../HTML/tintas.html" className="navMenuLink navLink">
          Tintas
        </a>
      </li>
      <li className="navMenuItem">
        <a href="../HTML/jarros.html" className="navMenuLink navLink">
          JARROS
        </a>
      </li>
    </ul>
  </nav>
  <div className="carrito">
    <div>
      <img
        onclick="showCart(this)"
        className="cart"
        src="../imagenes/cart.png"
        alt=""
      />
      <p className="count-product">0</p>
    </div>
    <div className="cart-products" id="products-id">
      <p className="close-btn" onclick="closeBtn()">
        X
      </p>
      <h3>Mi carrito</h3>
      <div className="card-items" />
      <h2>
        Total: $<strong className="price-total">0</strong>
      </h2>
    </div>
  </div>
  <div className="container">
    <div className="products">
      <div className="carts">
        <img src="../imagenes/Sello Fechador.jpeg" alt="" />
        <p className="title">Fechador</p>
        <p>
          <span>18</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={1} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Dispositivo compacto para marcar la fecha en documentos, con
              ajuste manual de día, mes y año.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/SelladorHojas.png" alt="" />
        <p className="title">Sello Automatico</p>
        <p>
          <span>15</span>$
        </p>
        <div className="overlay">
          <button href="" className="btn-add-cart" data-id={2}>
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Sello que permite estampar rápidamente información en documentos
              con un solo movimiento, utilizando una almohadilla de tinta
              incorporada y un mecanismo de resorte
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/selloMaderaRedondo.jpeg" alt="" />
        <p className="title">Sello Madera Redondo</p>
        <p>
          <span>15.50</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={3} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Herramienta tradicional para estampar diseños personalizados en
              papel u otros materiales, ideal para proyectos creativos.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/selloPortatil.jpeg" alt="" />
        <p className="title">Sello Portatil</p>
        <p>
          <span>8</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={4} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Dispositivo compacto y móvil para estampar diseños o información
              en documentos sobre la marcha, ideal para profesionales en
              movimiento
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/esfero.jpeg" alt="" />
        <p className="title">Esferográfico</p>
        <p>
          <span>14</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={5} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Sello personalizado con un diseño circular o esférico, que se
              utiliza comúnmente para marcar logotipos, firmas o información en
              documentos y materiales promocionales.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/../imagenes/sellaViena.jpg" alt="" />
        <p className="title">Sello Viena</p>
        <p>
          <span>10</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={6} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Herramienta clásica para estampar diseños personalizados en papel,
              con un estilo elegante y distintivo.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img
          src="../imagenes/../imagenes/selloNumeradora.jpg"
          alt="Product 6"
        />
        <p className="title">Sello Numeradora</p>
        <p>
          <span>23.99</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={7} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Dispositivo especializado para marcar secuencialmente números en
              documentos, útil para numerar facturas, recibos y otros registros.
              Precio
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/../imagenes/selloSeco.jpg" alt="" />
        <p className="title">Sello Seco</p>
        <p>
          <span>20</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={8} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Herramienta de marcaje sin tinta, que crea una impresión en
              relieve en papel u otros materiales mediante presión, ideal para
              agregar un toque profesional y discreto a documentos. Precio: $28
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src="../imagenes/selloMadera.jpg" alt="" />
        <p className="title">
          Sello de Madera
          <br />
        </p>
        <p>
          <span>7</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={9} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
              Sello grabado utilizado para imprimir diseños personalizados en
              diversas superficies Precio: $7
            </p>
          </div>
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

export default CatalogoSellos;