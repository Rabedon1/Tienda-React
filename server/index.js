const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./dbConfig');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/registro', (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const INSERT_USER_QUERY = `INSERT INTO clientes (nombre, apellido, email, password) VALUES (?, ?, ?, ?)`;
  connection.query(INSERT_USER_QUERY, [nombre, apellido, email, password], (err, results) => {
    if (err) {
      console.error('Error al registrar nuevo usuario:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    console.log('Nuevo usuario registrado:', results.insertId);
    res.status(201).send('Usuario registrado correctamente');
  });
});

app.put('/actualizarCliente', (req, res) => {
  const { nombre, apellido, telefono, nacimiento, email } = req.body;
  const UPDATE_USER_QUERY = `UPDATE clientes SET nombre = ?, apellido = ?, telefono = ?, nacimiento = ? WHERE email = ?`;
  connection.query(UPDATE_USER_QUERY, [nombre, apellido, telefono, nacimiento, email], (err, results) => {
    if (err) {
      console.error('Error al actualizar datos del cliente:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    console.log('Datos del cliente actualizados:', results.changedRows);
    res.status(200).send('Datos actualizados correctamente');
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const SELECT_USER_QUERY = `SELECT * FROM clientes WHERE email = ? AND password = ?`;
  connection.query(SELECT_USER_QUERY, [email, password], (err, results) => {
    if (err) {
      console.error('Error al realizar inicio de sesión:', err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    if (results.length > 0) {
      // Usuario autenticado correctamente
      const user = results[0];
      res.status(200).json({ message: 'Inicio de sesión exitoso', user });
    } else {
      // Credenciales inválidas
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  });
});

  
//BASE DE DATOS DE LOS PRODUCTOS

//CREATE
app.post("/create",(req,res)=>{
  const producto =req.body.producto;
  const cantidad =req.body.cantidad;
  const precio =req.body.precio;
  const categoria =req.body.categoria;
   
 connection.query('INSERT INTO productos(Producto,Cantidad,Precio,Categoria) VALUES(?,?,?,?)',[producto,cantidad,precio,categoria],
  (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send("Producto Registrado con exito");
    }
  }
  );

});


//READ
app.get("/getproductos",(req,res)=>{
  
   
 connection.query('SELECT * FROM productos',
  (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  }
  );

});

//CREATE
app.put("/update",(req,res)=>{

  const id =req.body.id;
  const producto =req.body.producto;
  const cantidad =req.body.cantidad;
  const precio =req.body.precio;
  const categoria =req.body.categoria;
   
 connection.query('UPDATE productos SET Producto=?,Cantidad=?,Precio=?,Categoria=? WHERE id=? ',[producto,cantidad,precio,categoria,id],
  (err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.send("Producto Actualizado con exito");
    }
  }
  );

});


app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
