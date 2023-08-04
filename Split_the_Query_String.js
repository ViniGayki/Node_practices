var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  console.log(q);
  var txt = q.name + " " + q.age;
  res.end('<h1>Split the Query String</h1>'+ txt);
}).listen(8081);