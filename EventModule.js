const eventModule = require('events');
const utilModule = require('util');

var Cars = function (model, speed) {
  this.model = model;
  this.speed = speed;
}

utilModule.inherits(Cars, eventModule.EventEmitter);

var bmw = new Cars('BMW', 250);
var audi = new Cars('Audi', 150);

var cars = [bmw, audi];
cars.forEach(function(car) {
  car.on('speed', function() {
    console.log(`${car.model} have speed ${car.speed}`);
  });
});

cars.forEach(function(car) {
  car.emit('speed');
});

var myEvent = new eventModule.EventEmitter();

myEvent.on('some_event', function (text) {
  console.log(text);
});

myEvent.emit('some_event', "Тестовый вызов события");
