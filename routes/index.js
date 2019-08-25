var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'The Wall' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'The Wall' });
  });
router.get('/classic', function(req, res, next) {
  res.render('classic', { title: 'The Wall - Classic', layout: 'classic' })
});
router.get('/classic/no',function(req,res,next) {
  res.render('no', {title: 'The Wall - Classic - No.', layout: 'classic'})
});

module.exports = router;
