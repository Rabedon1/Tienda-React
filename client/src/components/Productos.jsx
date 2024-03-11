import React from 'react';
import { useState } from 'react';
import Axios from "axios";



const Productos = () => {
    const [producto,setProducto] = useState("");
    const [cantidad,setCantidad] = useState(0);
    const [precio,setPrecio] = useState(0);
    const [categoria,setCategoria] = useState("");


    //lista Productos
    const [productosList,setProductos]= useState([]);

    //Create
const registrar = ()=>{

    if (cantidad < 0 || precio < 0) {
        alert("La cantidad y el precio deben ser números positivos.");
        return;
    }

    // Validar que la categoría sea una de las permitidas
    const categoriasPermitidas = ["Sellos", "Jarros", "Almohadillas", "Tintas"];
    if (!categoriasPermitidas.includes(categoria)) {
        alert("La categoría ingresada no es válida.");
        return;
    }
    
    Axios.post("http://localhost:5000/create",{
        producto:producto,
        cantidad:cantidad,
        precio:precio,
        categoria:categoria,


    }).then(()=>{
        getProductos();
        alert("Producto Registrado");
    });
}


//Read 
const getProductos = ()=>{
    Axios.get("http://localhost:5000/getproductos").then((response)=>{
        setProductos(response.data);
    });
}


    return (
        <div class="container">
            <h1>
                PRODUCTOS
            </h1>
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
            </div>
            <div className='lista'> 
            
            </div>
            </div>

            <table class="table table-striped">
            <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Categoria</th>

    </tr>
  </thead>
  <tbody>

  {
    productosList.map((value, key) => {
        return (
            <tr key={key}>
                <th scope="row">{value.id}</th>
                <td>{value.Producto}</td>
                <td>{value.Cantidad}</td>
                <td>{value.Precio}</td>
                <td>{value.Categoria}</td>
            </tr>
        );
    })
}

    
    
  </tbody>
            </table>   
            <button  onClick={registrar}>REGISTRAR</button>
            <button onClick={getProductos}>READ</button>
            
        </div>


       

    );
};

export default Productos;
