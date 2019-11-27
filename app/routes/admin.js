module.exports = (application) => {

  application.get('/form_inclusao_noticia', (req, res) => {
    application.app.controllers.admin.form_inclusao_noticia(application, req, res);
  });

  application.post('/noticias/salvar', (req, res) => {
    application.app.controllers.admin.noticias_salvar(application, req, res);
  });

}