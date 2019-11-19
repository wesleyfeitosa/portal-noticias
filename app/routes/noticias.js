// var connection = require('../../config/dbConnection')();

module.exports = (app) => {
  
  app.get('/noticias', (req, res) => {

    var connection = app.config.dbConnection();
    
    connection.query('select * from noticias', (error, result) => {
      res.render('noticias/noticias', {noticias: result});
      // res.send(result);
    })

  })
}