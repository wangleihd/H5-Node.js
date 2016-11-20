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

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: String,
    age: Number,
    DOB: Date,
    isAlive: Boolean
});

var User = mongoose.model('User', userSchema);

var arvind = new User({
    name : 'John',
    age: 23,
    DOB: '01/01/1999',
    isAlive: true
});

arvind.save(function(err, data){
  if(err){
    console.log(err);
  } else {
    console.log(data);
  }
});

User.find({}, function(err, data){
  console.log(data);
});
