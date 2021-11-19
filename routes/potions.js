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

  /******GET EDIT Potion*/
  router.get('/potions/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const potionId = parseInt(req.params.id, 10);
    const potion = await db.Potion.findByPk(potionId);
    res.render('potion-edit', {
      potion,
      csrfToken: req.csrfToken(),
    });
  }));

    /******POST EDIT Potion*/

router.post('/potions/edit/:id(\\d+)', csrfProtection,
  asyncHandler(async (req, res) => {
    const potionId = parseInt(req.params.id, 10);
    const potionToUpdate = await db.Potion.findByPk(potionId);

    const {
      name,
      description,
      type
    } = req.body;

    const potion = {
      name,
      description,
      type
    };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await potionToUpdate.update(potion);
      res.redirect(`/potions/${potionId}`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('potion-edit', {
        potion: { ...potion, id: potionId },
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));

























module.exports = router;
