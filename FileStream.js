var fs = require('fs');

var readFileStream = fs.createReadStream(`${__dirname}/largeFile.txt`, 'utf8');
var writeFileStream = fs.createWriteStream(`${__dirname}/news.txt`);

readFileStream.on('data', function(chunk) {
console.log(`Новые данные:\n ${chunk}`);
writeFileStream.write(chunk);
});

//readFileStream.pipe(writeFileStream);
