function Noticias(connection){
    this._connection = connection;
}

Noticias.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias', callback);
};

module.exports = function() {
    return Noticias;
}