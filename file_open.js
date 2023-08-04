var fs = require('fs');
// open old file
fs.open('demo.html',function (err, file) {
  if (err) throw err;
  console.log('Saved!');
})
