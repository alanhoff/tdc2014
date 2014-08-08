require('http').Server(function(req, res){
  if(req.method === 'GET' && req.url === '/'){
    res.write('<h1>Olá página inicial</h1>');
    return res.end();
  }
  if(req.method === 'GET' && req.url === '/contato'){
    res.write('<h1>Estamos no contato</h1>');
    return res.end();
  }
  if(req.method === 'POST' && req.url === '/contato'){
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({hello : 'Hello world'}));
    return res.end();
  }

  res.statusCode = 404;
  res.write('Não encontrado :-(');
  res.end();
}).listen(8080);

Malcolm Douglas McIlroy
