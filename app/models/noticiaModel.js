module.exports = function() {
    this.getNoticia = function(connection, id, callback){
        connection.query(`select * from noticias where id_noticia = ${id}`, callback);
    }
    return this;
}