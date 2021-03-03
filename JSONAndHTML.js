var fs = require('fs');

var http = require('http');

var server = http.createServer(function(request, response) {
  console.log(request.url);
  response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
  var testAuto = [{
    model: 'Audi',
    speed: 256.6,
    name: 'AudiName'
  },
{
  model: 'Toyota',
  speed: 245.8,
  name: 'ToyotaName'
}];
  response.end(JSON.stringify(testAuto));
  //response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  // var readFileStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
  // readFileStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Мы отслеживаем порт 3000');
