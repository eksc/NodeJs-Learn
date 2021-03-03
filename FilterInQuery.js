const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use('/styles', express.static('public'));

app.set('view engine', 'ejs');

app.get('/news/:id', function (request, response) {
  var obj = {
    model: 'audio',
    speed: 250,
    myArray: ['1', '2', '3', '4', '5']
  };
  console.log(request.query);
  response.render('news', {newsId: request.params.id, testObj: obj} );
});

app.listen(3000);
