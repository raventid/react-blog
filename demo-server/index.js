var express = require('express');
var application = express();

var items = require('./data').items;
var methods = require('methods');

var cors = require('cors');

application.use(cors());

application.get('/', function(req, res) {
  res.json(items);
});

application.get('/posts/:id', function(req, res) {
  var itemId = req.params.id - 1;
  res.json(items[itemId]);
});

application.post('/posts/:id', function(req, res) {
  var itemId = req.params.id - 1;
  items[itemId].meta.likes += 1;
  res.json(items[itemId]);
});

application.listen(8088, function() {
  console.log('server is listening on port 8088');
});
