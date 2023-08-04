var http = require('http');
// var uc = require('upper-case');
var fs = require('fs');//file module
http.createServer(function (req, res) {
    fs.appendFile('demo.html', 'Hello shona!',function(err)
    {
        if (err) throw err;
  console.log('Saved!');
    });
}).listen(8080);