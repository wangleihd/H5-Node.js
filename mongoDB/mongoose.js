var mongoose = require('mongoose');
var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', function(){
    console.log("Connect error");
});

db.once('open', function(){
    console.log("mongoose working!!!");
});
