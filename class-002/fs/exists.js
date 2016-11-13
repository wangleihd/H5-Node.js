var fs = require('fs');
var util = require('util');

fs.exists('./node', function(exists){
  util.debug(exists ? "it's there" : "No dir.")
})
