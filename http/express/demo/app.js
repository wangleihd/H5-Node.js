var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// 指定模板文件的后缀名为ejs

app.set('view engine', 'ejs');
app.set('views', __dirname+'/tpl');

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.get('/', function (req, res){
	res.render('index', {name: 'express'});
});

app.post('/about', function(req, res) {
  var info = [{name: 'Mary', age: 20},
  {name: 'Ben', age: 32},
  {name: 'Scotch', age: 21}
];
console.log(req.body);
	res.render('about', {
    info: info,
    title: "Information"
  });
});

app.get('/article', function(req, res) {
	res.render('article');
});

app.listen(3008);
