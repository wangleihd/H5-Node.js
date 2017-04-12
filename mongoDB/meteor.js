var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:3001/meteor';

var findDB = function(db, callback){
    var cursor = db.collection('students').find();
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
  })
});
