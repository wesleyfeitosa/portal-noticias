module.exports = (app) => {
  app.get('/form_inclusao_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
  });
}