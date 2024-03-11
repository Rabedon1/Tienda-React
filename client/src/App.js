import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom"
import './App.css';
import Paginainicial from './components/Paginainicial';
import CatalogoSellos from './components/CatalogoSellos';
import FAQS from './components/FAQS';
import Empresa from './components/Empresa';
import LogIn from './components/LogIn';
import Header from './components/Header';
import ClienteInfo from './components/ClienteInfo';


/* styles */
import './components/Paginainicial.css'; 
import './components/Header.css'; 
import './components/Catalogo.css';
import './components/FAQS.css'; 
import './components/Empresa.css';
import './components/Footer.css';
//import './components/Login.css';  


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  return (

      <Routes>
        <Route path="/" element={<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userData={userData}/>}>
          <Route index element={<Paginainicial/>}/>
          <Route path='/catalogoSellos' element={<CatalogoSellos/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/fAQS' element={<FAQS/>}/>
          <Route path='/LogIn' element={<LogIn setIsLoggedIn={setIsLoggedIn} setUserData={setUserData}/>} />
          <Route path='/ClienteInfo' element={<ClienteInfo isLoggedIn={isLoggedIn} userData={userData}/>} />
          {/* <Route path='*' element={<div>404 - not found</div>}/> */}
        </Route>
        
      </Routes>
    
  );
}

export default App;
