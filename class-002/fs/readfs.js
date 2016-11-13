var fs = require('fs');
var data;

try{
  data = fs.readFileSync('./content.md', 'utf-8');
} catch (err) {
  if (err.code === 'ENOENT'){
    console.log('File not found!');
  } else {
    throw err;
  }
}
