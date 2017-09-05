var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//I added
router.get('/detail', function(req, res, next) {
  res.send('Users detail');
});


//localhost:8000/users/detail

module.exports = router;
