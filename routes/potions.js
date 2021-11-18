const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();


/* GET users listing. */
router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
  const potion = await db.Potion.findOne({
    where: {
      id: req.params.id
    },
    include: db.PotionType
  });
  res.render('potion-detail', { potion });
}));

/* GET new-potions */
router.get('/add', csrfProtection, (req, res) => {
  const potionTypes = db.PotionType.findAll()
  return res.render('new-potion', { csrfToken: req.csrfToken(), potionTypes });
});

/* POST new-potions */

router.post('/add', csrfProtection, asyncHandler(async (req, res) => {
  const { name, description, type } = req.body
  await Potion.create({
    name,
    description,
    type
  });
  res.redirect('/');
}));
module.exports = router;
