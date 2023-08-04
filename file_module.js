var http = require('http');
var fs = require('fs');//file module
http.createServer(function (req, res) {
    fs.readFile('demo.html',function(req,data)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);