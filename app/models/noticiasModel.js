function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
};

Noticias.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function() {
    return Noticias;
}