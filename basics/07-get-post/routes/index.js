var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});


///test/:id passing parameter 'id'.
//'test' is a view (test.hbs).
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id});
});


router.post('/test/submit', function(req, res, next) {
  //in post request all the passed parameters in body (not in params as in get)
  var id = req.body.id;

  res.redirect('/test/' + id);

});

module.exports = router;
