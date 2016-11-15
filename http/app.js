var http = require('http');
var serv = http.createServer(function(req, res){
    res.writeHead(200);
    res.end('Welcome to Node.js!');
}).listen(3000);
