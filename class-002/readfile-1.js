var fs = require('fs');

fs.readFile('file.md', 'utf-8', function (err, data) {
  if(err){
    console.error(err);
  } else{
    console.log(data);
  }
});
console.log("readFile the end.");
