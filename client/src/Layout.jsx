import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Layout = () => {
    return (
        <main>
        <nav>
         <Link to="/" className='navMenuLink navLink'>Inicio</Link>
         <Link to="/catalogoSellos" className='navMenuLink navLink'>Catalogo</Link>   
         <Link to="/empresa" className='navMenuLink navLink'>Empresa</Link> 
         <Link to="/FAQS" className='navMenuLink navLink'>FAQS</Link> 

        </nav>

        <section>
            <Outlet/>
        </section>


    </main>
    );
};

export default Layout;