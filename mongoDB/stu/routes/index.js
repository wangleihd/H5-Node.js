var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'STU', h1: 'Student information system!' });
});

/* GET student information page */
router.get('/stu', function(req, res, next) {
    var db = req.db;
    var collection = db.get('stu');
    collection.find({}, {}, function(err, docs){
        res.render('stu', { title: 'STU', h1: 'Student information system!' , dbname: 'stuDB', studb:docs });
    });
});

router.get('/input', function(req, res, next){
    res.render('input', { title: 'Input information'});
});

router.post('/submit', function(req, res, next){
    var db = req.db;
    var name = req.body.username;
    var age = req.body.age;
    var email = req.body.email;
    var tel = req.body.tel;
    var conllection = db.get('stu');
    conllection.insert({
        name: name,
        age: age,
        tel: tel,
        email: email
    }, function(err){
        if(err){
            res.send("error: add data is error.");
        } else {
                res.render('submit', { title: 'input', info: 'ok'});
        }

    })

})

module.exports = router;
