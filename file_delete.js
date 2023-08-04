var fs = require('fs');

fs.unlink('demo.html', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});