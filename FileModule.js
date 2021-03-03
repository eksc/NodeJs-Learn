const file = require('fs');

file.readFile('text.txt', 'utf8', function(err, textFile) {
  if (err != null)
    console.log(err);
  else
    console.log(textFile);
});

console.log("Это первее");
var fileText = file.readFileSync('text.txt', 'utf8');
console.log(fileText);
file.writeFileSync('text.txt', `${fileText}\nМой новый текст`);
var fileText = file.readFileSync('text.txt', 'utf8');
console.log(fileText);
