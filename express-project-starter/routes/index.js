const express = require('express');
const router = express.Router();

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Pacific Potion Home' });
});

// GET login page
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
})

// GET register page
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
})

// GET inventory page
router.get('/inventory', function(req, res, next) {
  res.render('inventory', { title: inventory });
})

// GET search page
router.get('/search', function(req, res, next) {
  res.render('search', { title: 'search' });
})

// GET potion page by potion id
router.get('/potion/:potionId(//d+)', function(req, res, next) {
  console.log(req.params);
  res.render('potion', { title: `potion ${req.params}`})
})

module.exports = router;
