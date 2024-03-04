import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import logoNegro from '../image/logoNegro.png';


const Header = () => {
    return (

    <div>
      <header>
        <nav className="nav">
          <a href="../index.html" className="logo">
          <img className="imgLogo" src={logoNegro} alt="Ideart" />
          </a>
            <div className="buscar">
              <input type="text" placeholder="Buscar" required="" />
              <div className="btn">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ color: "#8a938f" }}
                />
              </div>
            </div>
            <button className="toggle">
              <i className="fa-solid fa-bars" />
            </button>
            <ul className="navMenu">
              <li className="navMenuItem">
                <Link to="/" className='navMenuLink navLink'>Inicio</Link>
              </li>
              <li className="navMenuItem">
                <Link to="/catalogoSellos" className='navMenuLink navLink'>Catalogo</Link>  
              </li>
              <li className="navMenuItem">
                <Link to="/FAQS" className='navMenuLink navLink'>FAQS</Link>
              </li>
              <li className="navMenuItem">
                <Link to="/empresa" className='navMenuLink navLink'>Empresa</Link> 
              </li>
              <li className="navMenuItem">
                <Link to="/logIn" className='navMenuLink navLink'>Inicio Seccion</Link> 
              </li>
            </ul>
        </nav>
      </header>
      <section>
        <Outlet/>
      </section>
    </div>
       
    );
};

export default Header;