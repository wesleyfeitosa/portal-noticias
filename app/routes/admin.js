module.exports = (app) => {

  app.get('/form_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', (req, res) => {
    var noticia = req.body;
    var connection = app.config.dbConnection(); // conexão
    var noticiaModel = app.app.models.noticiaModel; // model de noticia

    noticiaModel.salvarNoticia(noticia, connection, (error, result) => {
      res.redirect("/noticias"); // após a inserção da notícia é feito o redirecionamento para a página de notícias
    }); // toda requisição feita com POST é importante fazer o redirect no final para evitar o reenvio do formulário ao apertar F5.
  });

}