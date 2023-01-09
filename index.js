const express = require('express');
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')
const bodyParser = require('body-parser')


// Config
    // Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // Conexão com banco de dados
    const sequelize = new Sequelize('test', 'root', '123456', {
        host: 'localhost',
        dialect: 'mysql'
    })

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
    app.get('/cad', function(req, res) {
        res.render('formulario')
    })

    app.post('/add', function(req, res) {
        req.body.conteudo
        res.send('Formulário Enviado!')
    })


app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})