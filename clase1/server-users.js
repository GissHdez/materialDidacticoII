const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/users', function(req,res){
    var usuario= req.body.nombre + " " + req.body.apellido    
    res.send('Usuarios ingresados ' + usuario)  
    console.log(usuario);
});
router.put('/users', function(req,res){
    res.send('Ingresar nuevo usuario')
    var nuevo= 'Su nombre es: ' + req.query.nombre + ' y su apellido es: ' + req.query.apellido     
    console.log(nuevo);
});
router.delete('/users', function(req,res){
    res.send('Eliminar usuario existente')
    var nuevo= 'Su nombre es: ' + req.query.nombre + ' y su apellido es: ' + req.query.apellido     
    console.log(nuevo);
});
router.patch('/users', function(req,res){
    res.send('Modificar usuario existente')
});

app. listen(3001);
console.log('Escucha por: http://localhost:3001');