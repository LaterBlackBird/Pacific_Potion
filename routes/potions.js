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



/* GET new-potions */
router.get('/new-potion', csrfProtection, (req, res) => {
    const potionTypes = db.PotionType.findAll()
    return res.render('new-potion', {csrfToken:req.csrfToken(), potionTypes});
  });

/* POST new-potions */

  router.post('/new-potion', csrfProtection, asyncHandler(async(req, res) => {
    const { name, description, type} = req.body
    await Potion.create({
      name,
      description,
      type
    });
     res.redirect('/');
    }));
module.exports = router;
