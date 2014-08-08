var express = require('express');
var app = express();
var helmet = require('helmet');
var cors = require('cors');
var csrf = require('csurf');
var session = require('express-session');
var parser = require('body-parser');

// Middleware meu mesmo
app.use(function(req, res, next){

  // Posso fazer o que quiser aqui
  // antes de atingir a rota chamada
  req.hello = 'Hello world!';
  next();
});

// Sessão
app.use(session({secret: 'supersupersecreto'}));

// Seguranças do helmet
app.use(helmet.xframe());
app.use(helmet.xssFilter());

// Segurança CSRF
app.use(csrf());

// Segurança CORS
app.use(cors());

// Parse de payloads
app.use(parser.json());

// Mas no final continua sendo apenas um
// gerenciador de rotas :-)
app.get('/', function(req, res){
  res.send(req.hello);
});

app.listen(8080);
