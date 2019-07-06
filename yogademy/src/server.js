var bodyParser = require('body-parser')
var Sequelize = require('sequelize')
var tokenController = require('./app/controller/clientesController')
var clientesModel =require('./app/models/clientesModel')
var clientesController = require('./app/controller/clientesController')
var userModel = require('./app/models/usuariosModel')

var express = require ('express')
app = express(),
port = process.env.PORT || 3000

app.use (bodyParser.json())

const sequelize = new Sequelize('yogademy','root','MOCA871011lm9',{
    host:'localhost',
    dialect:'mysql'
});

sequelize
    .authenticate()
    .then(()=>{
        console.log('La conección fue establacida correctamente')
    }).catch(err=>{
        console.error('no se puede conectar la base de datos', err);
    })
tokenController(app,userModel(sequelize))
clientesController(app,clientesModel(sequelize))


app.listen(port)

console.log('app is running')