import React from 'react';
import fotoGrandeCatalogo from '../image/fotoGrandeCatalogo.png';
import SelloFechador from '../image/SelloFechador.jpeg';
import SelladorHojas from '../image/SelladorHojas.png';
import selloMaderaRedondo from '../image/selloMaderaRedondo.jpeg';
import selloPortatil from '../image/selloPortatil.jpeg';
import esfero from '../image/esfero.jpeg';
import sellaViena from '../image/sellaViena.jpg';
import selloNumeradora from '../image/selloNumeradora.jpg';
import selloSeco from '../image/selloSeco.jpg';
import selloMadera from '../image/selloMadera.jpg';
import AlmohadillaDactilar from '../image/AlmohadillaDactilar.png';
import AlmohadillaMadera from '../image/almohadillaMadera.jpg';
import repuestoAlmohadilla from '../image/repuestoAlmohadilla.jpg';

import jarroCervecero from '../image/jarroCervecero.jpg';
import jarroEcuador from '../image/jarroEcuador.png';
import jarroMagico from '../image/jarroMagico.jpg';
import tintaPlastico from '../image/tintaPlastico.jpg';
import tintaSello from '../image/tintaSello.jpg';
import tintaTextil from '../image/tintaTextil.jpg';

const CatalogoSellos = () => {
    return (
        <div>
            <>
  <div className="contenedorImagenPrincipal">
    <img
      className="imagenPrincipal"
      src={fotoGrandeCatalogo}
      alt="Foto grande"
    />
  </div>
  <h1>PRODUCTOS</h1>
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
        <img src={SelloFechador} alt="" />
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
        <img src={SelladorHojas} alt="" />
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
        <img src={selloMaderaRedondo} alt="" />
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
        <img src={selloPortatil} alt="" />
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
        <img src={esfero} alt="" />
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
        <img src={sellaViena} alt="" />
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
          src={selloNumeradora}
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
        <img src={selloSeco} alt="" />
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
        <img src={selloMadera} alt="" />
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
     
      <div className="carts">
        <img src={AlmohadillaDactilar} alt="" />
        <p className="title">
        ALMOHADILLA DACTILAR
          <br />
        </p>
        <p>
          <span>8</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={10} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Una almohadilla de tinta especialmente diseñada para la toma de huellas dactilares,
                 proporcionando un recubrimiento uniforme de tinta que permite una impresión clara y legible.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src={AlmohadillaMadera} alt="" />
        <p className="title">
        ALMOHADILLA MADERA
          <br />
        </p>
        <p>
          <span>10</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={11} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Una almohadilla diseñada para aplicarse en sellos de madera, 
                ofreciendo una base firme y uniforme para la tinta, garantizando impresiones limpias y precisas.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src={repuestoAlmohadilla} alt="" />
        <p className="title">
        REPUESTO ALMOHADILLA
          <br />
        </p>
        <p>
          <span>5</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={12} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Una almohadilla de tinta diseñada para reemplazar la almohadilla agotada en sellos de caucho o polímero,
                 permitiendo prolongar la vida útil del sello sin comprometer la calidad de las impresiones.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src={tintaSello} alt="" />
        <p className="title">
        TINTA SELLO
          <br />
        </p>
        <p>
          <span>12</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={13} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Diseñada para aplicarse en sellos de caucho o polímero, proporcionando una impresión nítida y
                duradera en una variedad de superficies.
            </p>
          </div>
        </div>
      </div>
      <div className="carts">
        <img src={tintaPlastico} alt="" />
        <p className="title">
        TINTA PLASTICO
          <br />
        </p>
        <p>
          <span>18</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={14} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Es una tinta especialmente formulada para adherirse de manera
                 duradera a superficies de plástico, ofreciendo resistencia a la abrasión y al lavado.
            </p>
          </div>
        </div>
        
      </div>
      <div className="carts">
        <img src={tintaTextil} alt="" />
        <p className="title">
        TINTA TEXTIL
          <br />
        </p>
        <p>
          <span>15.50</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={15} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Formulada para adherirse de manera efectiva a tejidos, 
                ofreciendo colores vibrantes y duraderos incluso después de múltiples lavados.
            </p>
          </div>
        </div>
        
      </div>
      <div className="carts">
        <img src={jarroCervecero} alt="" />
        <p className="title">
        JARRO CERVECERO
          <br />
        </p>
        <p>
          <span>16</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={16} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Jarros cerveceros con el logotipo de una empresa, un diseño gráfico específico o 
                incluso con imágenes fotográficas. La impresión se realiza con técnicas especializadas
                en el material del jarro, lo que garantiza 
                que el diseño sea duradero y resistente a los lavados.
            </p>
          </div>
        </div>
        
      </div>
      <div className="carts">
        <img src={jarroEcuador} alt="" />
        <p className="title">
        JARRO CERAMICA
          <br />
        </p>
        <p>
          <span>16</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={17} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Se imprimime con un diseño tecnico
                 Utilizando técnicas de impresión de sublimación se garantiza que el diseño se aplique de manera precisa y
                  que la revelación del diseño sea sorprendente y atractiva.
            </p>
          </div>
        </div>
        
      </div>
      <div className="carts">
        <img src={jarroMagico} alt="" />
        <p className="title">
        JARRO MAGICO
          <br />
        </p>
        <p>
          <span>10</span>$
        </p>
        <div className="overlay">
          <button href="" data-id={18} className="btn-add-cart">
            Agregar
          </button>
          <button className="description-btn">Descripción</button>
          <div className="description-content">
            <p>
            Los jarros mágicos son una opción creativa para regalos promocionales, Se imprimime con un diseño oculto 
                que solo se revela cuando se llena el jarro con líquido caliente.
                 Utilizando técnicas de impresión de sublimación se garantiza que el diseño se aplique de manera precisa y
                  que la revelación del diseño sea sorprendente y atractiva.
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