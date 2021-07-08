const mysql = require('mysql');
require('dotenv').config()

// Pour l'évaluation, l'idée sera de faire un dump depuis workbench avec Server > Data export, l'évaluateur devra donc faire un import 

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: '3306',
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
});

module.exports = connection;