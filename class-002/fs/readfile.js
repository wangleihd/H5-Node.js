var fs = require('fs');

fs.readFile('./content.md', function(err, data){
console.log(arguments[arguments.length - 1]);
  if(err){
    console.log(err);
  }else {
    console.log(data);
  }
});
