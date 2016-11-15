var http = require('http');
var serv = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('<h1>Welcome to Node.js!</h1>');
}).listen(3000);
