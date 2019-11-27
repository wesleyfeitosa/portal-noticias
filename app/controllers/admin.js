module.exports.form_inclusao_noticia = function (application, req, res) {
    res.render('admin/form_add_noticia', { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    // express-validator
    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render('admin/form_add_noticia', { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection(); // conexão
    var noticiaModel = new application.app.models.noticiaModel(connection); // model de noticia

    noticiaModel.salvarNoticia(noticia, (error, result) => {
        res.redirect("/noticias"); // após a inserção da notícia é feito o redirecionamento para a página de notícias
    }); // toda requisição feita com POST é importante fazer o redirect no final para evitar o reenvio do formulário ao apertar F5.
}