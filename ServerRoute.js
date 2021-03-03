var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  console.log(request.url);

  if (request.url === '/index' || request.url === '/') {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html').pipe(response);
  }
  else{
    response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/404.html').pipe(response);
  }
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');
