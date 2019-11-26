module.exports = (app) => {
  
    app.get('/noticia', (req, res) => {
  
      var connection = app.config.dbConnection();
      var noticiaModel = new app.app.models.noticiaModel(connection);

      noticiaModel.getNoticia(3, (error, result) => {
        res.render('noticias/noticia', { noticia: result });
        // res.send(result);
      })
      
    })
  }