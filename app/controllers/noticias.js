module.exports.noticias = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.getNoticias((error, result) => {
        res.render('noticias/noticias', { noticias: result });
        // res.send(result);
    });
}

module.exports.noticia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var noticiaModel = new application.app.models.noticiaModel(connection);

    noticiaModel.getNoticia(req.query.id_noticia, (error, result) => {
        res.render('noticias/noticia', { noticia: result });
        // res.send(result);
    })
}