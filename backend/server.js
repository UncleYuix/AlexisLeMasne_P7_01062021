// Imports

var express = require('express');
// // const user = require('./models/user'); 
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// instancition de mon server

server = express();




// configuration de mes routes

server.use(function (req, res, next) {
    // res.setHeader('Conten-Type','text/html');
    // res.status(200).send('<h1> Bonjour sur mon back de P7 </h1>')

    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, HttpHeaders');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

    next();
});

// Bodyparser config

 // server.use(bodyParser.urlencoded(true));   
server.use(bodyParser.json());


server.use('/api/', apiRouter)

server.listen(8080, function (){
    console.log('serveur en écoute par un mec qui galère un max')
})