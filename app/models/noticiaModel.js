function Noticia(connection){
    this._connection = connection;
} 

Noticia.prototype.getNoticia = function(id, callback){
    this._connection.query(`select * from noticias where id_noticia = ${id}`, callback);
}

Noticia.prototype.salvarNoticia = function(noticia, callback){
    // inserindo dados no banco através do set onde funciona como um de método de orm 
    this._connection.query(`insert into noticias set ? `, noticia, callback);    
}

module.exports = function() {
    return Noticia;
}