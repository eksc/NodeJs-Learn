const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use('/styles', express.static('public'));

app.set('view engine', 'ejs');

var urlEncodeParser = bodyParser.urlencoded({extended: false});

app.get('/', function (request, response) {
  response.render('index');
});
app.get('/about', function (request, response) {
  response.render('about');
});
app.post('/about', urlEncodeParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.render('about-success', {data: request.body});
});
app.get('/404', function (request, response) {
  response.sendFile(__dirname + '/404.html');
});
app.get('/news/:id', function (request, response) {
  var obj = {
    model: 'audio',
    speed: 250,
    myArray: ['1', '2', '3', '4', '5']
  };
  response.render('news', {newsId: request.params.id, testObj: obj} );
});

app.listen(3000);
