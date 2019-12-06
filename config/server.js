const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public')); // leva os asrquivos estaticos para a raiz do projeto
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(expressValidator());

consign({cwd: process.cwd()+"/app"}) // carrega automaticamente os módulos da nossa aplicação
    .include('config/dbConnection.js')
    .then('controllers') // os controllers da aplicação
    .then('models') // os models da aplicação
    .then('routes') // sempre deixa as rotas por último para evitar bugs
    .into(app); // insere dentro do app do express

module.exports = app;