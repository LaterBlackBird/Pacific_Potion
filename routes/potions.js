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
      {
        model: db.Comment,
        include: db.User
      }
    ]
  });

  res.render('potion-detail', { potion });
}));

/* MAKE NEW COMMENT ON POTION PAGE */
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  console.log('Inside post route');
  const { userId } = req.session.auth;
  const users = await db.User.findByPk(userId);
  const comment = await db.Comment.create({
    comment: req.body.comm,
    user_id: userId,
    potion_id: req.params.id
  });
  res.json({ "comm": comment, "users": users });
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


// /*DELETE COMMENTS */
//   router.get('/delete/:id(\\d+)', csrfProtection,
//   asyncHandler(async (req, res) => {
//     const commentId = parseInt(req.params.id, 10);
//     const comment = await db.Comment.findByPk(commentId);
//     res.render('comment-delete', {
//       comment,
//       csrfToken: req.csrfToken(),
//     });
//   }));


//   router.post('/delete/:id(\\d+)', csrfProtection,
//   asyncHandler(async (req, res) => {
//     const commentId = parseInt(req.params.id, 10);
//     const comment = await db.Comment.findByPk(commentId);
//     await comment.destroy();
//     res.redirect('/potions');
//   }));


  // /*EDIT COMMENTS*/

// router.get('/potions/edit/:id(\\d+)', csrfProtection,
//   asyncHandler(async (req, res) => {
//     const commentId = parseInt(req.params.id, 10);
//     const comment = await db.Comment.findByPk(commentId);
//     res.render('comment-edit', {
//       comment,
//       csrfToken: req.csrfToken(),
//     });
//   }));


//   router.post('/potions/edit/:id(\\d+)', csrfProtection,
//   asyncHandler(async (req, res) => {
//     const commentId = parseInt(req.params.id, 10);
//     const commentToUpdate = await db.Comment.findByPk(commentId);

//     const {
//       comment,
//       potion_id
//     } = req.body;

//     const comment = {
//       comment
//     };

//     const potionId = {
//       potion_id
//     }

//     const validatorErrors = validationResult(req);

//     if (validatorErrors.isEmpty()) {
//       await commentToUpdate.update(comment);
//       res.redirect(`/potions/${potionId}`);
//     } else {
//       const errors = validatorErrors.array().map((error) => error.msg);
//       res.render('comment-edit', {
//         comment: { ...comment, id: commentId },
//         errors,
//         csrfToken: req.csrfToken(),
//       });
//     }
//   }));












module.exports = router;
