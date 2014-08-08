var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);

// Enviar o template
app.get('/', function(req, res){
  res.render('main', {hello: 'Hello world'});
});

app.listen(8080);
