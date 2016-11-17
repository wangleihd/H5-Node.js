module.exports = function(app){
  app.get('/', function(req, res){
    res.send('Weclome to Node.js.');
  });

  app.get('/doc', function(req, res){
    res.send('doc page');
  });

  app.get('/admin', function(req, res){
    res.send('admin page');
  });
};
