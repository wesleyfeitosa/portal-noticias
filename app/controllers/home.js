module.exports.index = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.noticiasModel(connection);

    noticiasModel.get5UltimasNoticias((error, result) => {
        if(error){
            console.log(error);
        }
        res.render("home/index", { noticias: result });
    });

}