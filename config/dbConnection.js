var mysql = require('mysql');

var connMySQL = function(){
    return mysql.createConnection({
        host: 'us-cdbr-iron-east-05.cleardb.net',
        user: 'be876e7616b25c',
        password: 'c8909e74',
        database: 'heroku_d9bb470b39c120a'
    });
}

module.exports = function () {
    console.log('conexão feita com sucesso!');
    return connMySQL;
}