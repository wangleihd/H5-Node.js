var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb';

var removeDB = function(db, callback) {
   db.collection('restaurants').deleteMany(
      { "name": "Vella" },
      function(err, results) {
         console.log(results);
         callback();
      }
   );
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');
  removeDB(db, function(){
      db.close();
  });
});
