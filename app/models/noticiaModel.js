module.exports = function() {
    this.getNoticia = function(connection, id, callback){
        connection.query(`select * from noticias where id_noticia = ${id}`, callback);
    }
    
    this.salvarNoticia = function(noticia, connection, callback){
        // inserindo dados no banco através do set onde funciona como um de método de orm 
        connection.query(`insert into noticias set ? `, noticia, callback);    
    }

    return this;
}