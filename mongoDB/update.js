var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';

var updateDB = function(db, callback){
    db.collection('restaurants').updateOne(
        {"name": "Juni"},
        { $set: { "cuisine": "China" },
          $set: { "restaurant_id": "555555" },
        $currentDate: { "lastModified": true } },
      function(err, results) {
      console.log(results);
      callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');

  updateDB(db, function(){
      db.close();
  });
});
