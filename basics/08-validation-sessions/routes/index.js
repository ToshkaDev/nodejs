var express = require('express');
var router = express.Router();

/* GET home page. */
//req.session.errors is empty at the beggining of course
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors});
  //setting all the errors to null after showing them to user
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
  //check validity of values
  //email, password and confirmPassword should match what is in "index.hbs"
  req.check('email', 'Invalid email addresss').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  //validationErrors() is from express-validation pakage of course
  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
      req.session.success = true;
  }

  res.redirect('/');
});

module.exports = router;
