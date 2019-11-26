const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign() // carrega automaticamente os módulos da nossa aplicação
    .include('config/dbConnection.js')
    .then('app/models') // os models da aplicação
    .then('app/routes') // sempre deixa as rotas por último para evitar bugs
    .into(app); // insere dentro do app do express

module.exports = app;