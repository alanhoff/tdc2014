var express = require('express');
var app = express();

// Fácil de saber onde está o controlador
// Código mais fácil de entender
app.get('/', function(req, res){
  res.send('<h1>Hello world!</h1>');
});

app.listen(8080);
