const express = require("express");

const mysql = require("mysql");


let conexion = mysql.createConnection({
    host:"localhost",
    database: "baseejemplo",
    user: "root",
    password: ""
})

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",function(req,res){
    res.render("registro");
});

app.post("/validar",function(req,res){
    const datos = req.body;
    let identificacion = datos.cedula;
    let nombreUsuario = datos.nombre;
    let apellidoUsuario = datos.apellido;
    let numTelefono = datos.telefono;

    let registrar = "INSERT INTO usuario VALUES ('"+identificacion+"','"+nombreUsuario+"','"+apellidoUsuario+"','"+numTelefono+"')";
    
    conexion.query(registrar,function(error){
        if (error){
            throw error;
        }else {
            console.log("Datos almacenados correctamente");
        }

    }); 



});

app.listen(3000, function(){
        console.log("Servidor creado http://localhost:3000");
});