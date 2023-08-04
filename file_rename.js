var fs = require('fs');

fs.rename('demo2.html', 'demo.html', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
