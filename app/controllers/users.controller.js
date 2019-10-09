const dbConfig = require('../.././config/database.config.js');
var mysql      = require('mysql');
var connection = mysql.createConnection(dbConfig);
exports.findAll = (req, res) => {    
    connection.query('SELECT * FROM users ORDER BY id desc',function(err,rows)     {
        res.send(rows);
                            
    });

}
