const express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('This is home');
});
app.get('/news/:id&:name', function (request, response) {
  response.send(`This is news with id: ${request.params.id} and name: ${request.params.name}`);
});

app.listen(3000);
