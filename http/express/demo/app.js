var express = require('express');
var app = express();

// 指定模板文件的后缀名为ejs

app.set('view engine', 'ejs');
app.set('views', __dirname+'/tpl');


app.get('/', function (req, res){
	res.render('index', {name: 'express'});
});

app.get('/about', function(req, res) {
  var info = [{name: 'Mary', age: 20},
  {name: 'Ben', age: 32},
  {name: 'Scotch', age: 21}
];
	res.render('about', {
    info: info,
    title: "Information"
  });
});

app.get('/article', function(req, res) {
	res.render('article');
});

app.listen(3000);
