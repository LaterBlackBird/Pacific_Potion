const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();

/* VIEW POTION. */
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const potion = await db.Potion.findOne({
    where: {
      id: req.params.id
    },
    include: [
      db.PotionType,
      db.Comment
    ]
  });

  res.render('potion-detail', { potion });
}));

/* MAKE NEW COMMENT ON POTION PAGE */
// router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
//   console.log('Inside post route')
//   const { userId } = req.session.auth;
//   console.log(userId);
//   await Comment.create({
//     comment: req.body,
//     user_id: userId,
//     potion_id: req.params.id
//   });
// }))

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

/*GET DELETE potion */
router.get('/delete/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const potionId = parseInt(req.params.id, 10);
    const potion = await db.Potion.findByPk(potionId);
    res.render('potion-delete', {
      potion,
      csrfToken: req.csrfToken(),
    });
  }));

// // /*POST DELETE potion*/

router.post('/delete/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const potionId = parseInt(req.params.id, 10);
    const potion = await db.Potion.findByPk(potionId);
    await potion.destroy();
    res.redirect('/potions');
  }));
module.exports = router;
