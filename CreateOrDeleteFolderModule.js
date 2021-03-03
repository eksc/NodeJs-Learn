var fs = require('fs');

fs.unlink('delete.txt', function () {
  console.log('Удаление успешно');
});

fs.mkdir('new_folder', function() {
  fs.writeFile('./new_folder/newFile.txt', 'test text', function() {
    console.log("Успешно");
  });
});
