const express = require('express');
// import express from 'express'; Es la misma que la anterior escrita distinto
const router = express.Router();
const bodyParser = require('body-parser');

var app = express();
app.use(router)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

router.get('/', function(req,res){
    res.send('Hola desde Get')
});
router.post('/', function(req,res){
    res.send('Hola desde Post')
});
router.put('/', function(req,res){
    res.send('Hola desde Put')
});
router.patch('/', function(req,res){
    res.send('Hola desde Patch')
});
router.delete('/', function(req,res){
    res.send('Hola desde Delete')
});

router.get('/users', function(req,res){
    var suma = req.body.sumando01 + req.body.sumando02
    var saludo= 'Su nombre es: ' + req.query.nombre + ' y tiene ' + req.query.edad
    console.log(suma);
    console.log(saludo);
    res.send('get desde user')
})

app.listen(3001);
console.log('Estoy escuchando por: http://localhost:3001');