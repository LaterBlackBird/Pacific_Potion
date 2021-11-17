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
  const userIds = [];
  const passArr = [];
  users.forEach(user => {
    userIds.push(user.id);
  })
  comments.forEach(comment => {
    passArr.push(users[userIds[comment.user_id - 1]]);
    // const userNumber = await db.User.findByPk(`${comment.user_id}`);
    // let uName = userNumber.username;
    // usernamesArr.push(uName);
  })
  console.log('passArr is', passArr);
  // console.log(users[2].id);
  res.render('potion-detail', { passArr, comments });
}));


module.exports = router;
