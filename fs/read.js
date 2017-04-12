var fs = require('./my.js');
var filename = 'file.md'
var data = 'My name is Richard Wang'

fs.myReadFile(filename, function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.myWriteFile(data, );
