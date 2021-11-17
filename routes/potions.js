const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();

const { comment, user } = require('../public/javascripts/potionsRequirement');


/* GET users listing. */
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const comments = await db.Comment.findAll({
    where: { potion_id: req.params.id }
  })
  
  console.log('****************');
  console.log(comments);
  console.log('****************');
  res.render('potion-detail', { comments });
}));


module.exports = router;
