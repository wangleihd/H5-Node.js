var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';

var findDB = function(db, callback){
    var cursor = db.collection('restaurants').find();
    cursor.each(function(err, doc){
        assert.equal(err, null);
        if(doc !== null){
            console.dir(doc);
        } else {
            callback();
        }
    });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');

  findDB(db, function(){
      db.close();
  });
});
