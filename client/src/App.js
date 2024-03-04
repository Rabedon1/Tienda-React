import { Routes, Route} from "react-router-dom"
import './App.css';
import Paginainicial from './components/Paginainicial';
import CatalogoSellos from './components/CatalogoSellos';
import FAQS from './components/FAQS';
import Empresa from './components/Empresa';
import LogIn from './components/LogIn';
import Header from './components/Header';


/* styles */
import './components/Paginainicial.css'; 
import './components/Header.css'; 
import './components/Catalogo.css';
import './components/FAQS.css'; 
import './components/Empresa.css';
import './components/Footer.css';
// import './components/Login.css';  


function App() {
  return (

      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Paginainicial/>}/>
          <Route path='/catalogoSellos' element={<CatalogoSellos/>}/>
          <Route path='/empresa' element={<Empresa/>}/>
          <Route path='/fAQS' element={<FAQS/>}/>
          <Route path='/logIn' element={<LogIn/>}/>
          {/* <Route path='*' element={<div>404 - not found</div>}/> */}
        </Route>
      </Routes>
    
  );
}

export default App;
