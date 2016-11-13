var fs = require('fs');
var tmpDir = './tmp';
var mode = 493;    // parseInt(755, 8)
console.log(a);
fs.exists(tmpDir, function(st){
  if (st){
    console.log("It's here " + tmpDir + "\nI will delete it." );
    fs.rmdir(tmpDir, function(err){
      if(err){
        console.log(err);
      }
    });
  } else {
    console.log("No " + tmpDir + "\nI will create it.");
    fs.mkdir(tmpDir, mode, function(err) {
      if(err){
        console.log(err);
      }
    });
  }
});
