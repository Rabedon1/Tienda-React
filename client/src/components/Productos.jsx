import React from 'react';

const Productos = () => {
    return (
        <div class="container">
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
            <button className="btn btn-success">Success</button>
            

        </div>
    );
};

export default Productos;
