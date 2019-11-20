module.exports = (app) => {
  
    app.get('/noticia', (req, res) => {
  
      var connection = app.config.dbConnection();
      var noticiaModel = app.app.models.noticiaModel;

      noticiaModel.getNoticia(connection, 3, (error, result) => {
        res.render('noticias/noticia', { noticia: result });
        // res.send(result);
      })
      
    })
  }