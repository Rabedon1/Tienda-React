import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import logoNegro from '../image/logoNegro.png';


const Header = ({isLoggedIn}) => {

    return (

    <div>
      <header>
        <nav className="nav">
          <a href="../index.html" className="logo">
          <img className="imgLogo" src={logoNegro} alt="Ideart" />
          </a>
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
              {isLoggedIn ? (
                <li className="navMenuItem">
                  <Link to="/ClienteInfo" className='navMenuLink navLink'>Mi cuenta</Link>
                </li>
              ) : (
                <li className="navMenuItem">
                  <Link to="/LogIn" className='navMenuLink navLink'>Iniciar sesión</Link>
                </li>
              )}
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