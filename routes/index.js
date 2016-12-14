var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/landing', function(req, res) {
  res.render('landing');
});

router.get('/generic', function(req, res) {
  res.render('generic');
});

router.get('/elements', function(req, res) {
  res.render('elements');
});

module.exports = router;
