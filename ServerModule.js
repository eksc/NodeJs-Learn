var http = require('http');

var server = http.createServer(function(request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  response.end('Привет мир!');
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');
