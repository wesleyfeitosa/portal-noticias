const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home/index');
});

app.get('/form_noticia', (req, res) => {
  res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
  res.render('noticias/noticias');
})

app.listen(3333, (req, res) => {
  console.log('Servidor rodando com express!');
});