require('http').Server(function(req, res){
  res.write('Eu não me importo com suas rotas')
  res.end();
}).listen(8080);
