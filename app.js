const app = require('./config/server');

const rotaNoticias = require('./app/routes/noticias')(app);
const rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
const rotaHome = require('./app/routes/home')(app);

app.listen(3333, (req, res) => {
  console.log('Servidor On');
});