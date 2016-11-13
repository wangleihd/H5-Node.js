var fs = require('fs');
var data = "The is write file."
fs.writeFile('./abcd.md', data, function(err){
  if(err){
    console.log(err);
  }
});
