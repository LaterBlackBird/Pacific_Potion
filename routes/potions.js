const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();

const { comment, user } = require('../public/javascripts/potionsRequirement');


/* VIEW POTION. */
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
  const comments = await db.Comment.findAll({
    where: { potion_id: req.params.id }
  })
  const users = await db.User.findAll();
  const idOfEveryUser = [];
  const passArr = [];
  users.forEach(user => {
    idOfEveryUser.push(user.id);
  })
  comments.forEach(comment => {
    passArr.push(users[idOfEveryUser[comment.user_id - 1] - 1]);
  })

  res.render('potion-detail', { passArr, comments });
}));


module.exports = router;
