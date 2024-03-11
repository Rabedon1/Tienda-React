import React from 'react';
import { useState } from 'react';
import Axios from "axios";



const Productos = () => {

    const [producto,setProducto] = useState("");
    const [cantidad,setCantidad] = useState(0);
    const [precio,setPrecio] = useState(0);
    const [categoria,setCategoria] = useState("");

const registrar = ()=>{
    Axios.post("http://localhost:5000/create",{
        producto:producto,
        cantidad:cantidad,
        precio:precio,
        categoria:categoria,


    }).then(()=>{
        alert("Producto Registrado");
    });
}



    return (

        <div className="Productos">
            <div className="datos">
                <label>Productos: <input 
                onChange={(event)=>{
                    setProducto(event.target.value);
                }}
                type="texto"/></label>
                <label>Cantidad: <input 
                onChange={(event)=>{
                    setCantidad(event.target.value);
                }}
                type="number"/></label>
                <label>Precio: <input 
                onChange={(event)=>{
                    setPrecio(event.target.value);
                }}
                type="number"/></label>
                <label>Categoria: <input 
                onChange={(event)=>{
                    setCategoria(event.target.value);
                }}
                type="texto"/></label>
                <button onClick={registrar}>Registrar Producto</button>


            </div>
        </div>
       /*  <div class="container">
            <h1>REGISTRO DE PRODUCTOS</h1>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Categoria</th>
                    </tr>
                 </thead>
                 <tbody class="table-group-divider">
                    <tr>
                     <th scope="row">1</th>
                     <td>Mark</td>
                     <td>Otto</td>
                     <td>@mdo</td>
                     <td>@mdo</td>
                    </tr>
                     <tr>
                     <th scope="row">2</th>
                     <td>Jacob</td>
                     <td>Thornton</td>
                     <td>@fat</td>
                     <td>@mdo</td>
                     </tr>
                     <tr>
                     <th scope="row">3</th>
                     <td colspan="2">Larry the Bird</td>
                     <td>@twitter</td>
                     <td>@mdo</td>
                    </tr>
                    
                 </tbody>
            </table>
            <div className="btn-group" role= "group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Mostrar</button>


            </div>
        </div> */

    );
};

export default Productos;
