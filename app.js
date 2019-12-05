const app = require('./config/server');

// não é necessário importar as rotas pois o CONSIGN  já faz isso automaticamente
// const rotaNoticias = require('./app/routes/noticias')(app);
// const rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
// const rotaHome = require('./app/routes/home')(app);

app.listen(process.env.PORT || 3333, (req, res) => {
  console.log('Servidor On');
});