var http = require('http');
var serv = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(['<h1>Welcome to Node.js!</h1>',
    '<form method="POST" action="/url">',
    '<fieldset>',
    '<label> Personal information </label>',
    '<p>Name</p>',
    '<input type="text" name="name">',
    '<p><button>Submit</button></p>',
    '</form>'
].join(' '));
}).listen(3000);
