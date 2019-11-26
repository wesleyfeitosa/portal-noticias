module.exports = (app) => {

  app.get('/form_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
  });

  app.post('/noticias/salvar', (req, res) => {
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({ format: 'YYYY-MM-DD' });
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var connection = app.config.dbConnection(); // conexão
    var noticiaModel = new app.app.models.noticiaModel(connection); // model de noticia

    noticiaModel.salvarNoticia(noticia, (error, result) => {
      res.redirect("/noticias"); // após a inserção da notícia é feito o redirecionamento para a página de notícias
    }); // toda requisição feita com POST é importante fazer o redirect no final para evitar o reenvio do formulário ao apertar F5.
  });

}