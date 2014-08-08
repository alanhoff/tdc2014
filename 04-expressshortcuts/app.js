var express = require('express');
var app = express();

// Enviar arquivos
app.get('/', function(req, res){
  res.sendFile('index.html');
});

// Enviar statusCode, JSON, parâmetros e query
app.get('/api/:endpoint', function(req, res){
  res.status(200).json({
    endpoint: req.params.endpoint,
    query: req.query
  });
});

app.listen(8080);
