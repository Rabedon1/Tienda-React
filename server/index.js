// server.js

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
        res.status(200).json({ message: 'Inicio de sesión exitoso' });
      } else {
        // Credenciales inválidas
        res.status(401).json({ message: 'Credenciales inválidas' });
      }
    });
  });
  
  

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
