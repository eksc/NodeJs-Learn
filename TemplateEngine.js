const express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html');
});
app.get('/404', function (request, response) {
  response.sendFile(__dirname + '/404.html');
});
app.get('/news/:id', function (request, response) {
  var obj = {
    model: 'audio',
    speed: 250,
    myArray: ['Серега', 'Хватит', 'Работать', 'Го', 'Гулять']
  };
  response.render('news', {newsId: request.params.id, testObj: obj} );
});

app.listen(3000);
