const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();


/* GET users listing. */
router.get('/:id(\\d+)', function(req, res, next) {
  res.render('potion-detail');
});

router.get('/new-potion', (req, res) => {
  res.render('new-potion');
})


module.exports = router;
