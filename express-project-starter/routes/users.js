const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

/********************** USER REGISTRATION ********************************/

router.get('/user/register', csrfProtection, (req, res) => {
  const user = db.User.build();

  res.render('signup-form', {
    title: 'Register',
    user,
    csrfToken: req.csrfToken()
  });
});

router.post('/user/register', userValidators, csrfProtection, asyncHandler(async (req, res) => {
  const {
    username,
    role,
    email,
    password
  } = req.body;

  const user = await db.User.build({
    username,
    role,
    email
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    await user.save();
    loginUser(req, res, user)
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map(error => error.msg);
    res.render('signup-form', {
      title: 'Register',
      user,
      errors,
      csrfToken: req.csrfToken()
    });
  };
}));



/********************** USER LOGIN ********************************/

router.get('/user/login', csrfProtection, (req, res) => {
  //go to the login page
  res.render('login', {
    title: 'Login',
    csrfToken: req.csrfToken(),
  });
});

router.post('/user/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  //destructure user inputs
  const {
    username,
    password,
  } = req.body;

  let errors = [];
  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { username } });

    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.password.toString());
      if (passwordMatch) {
        loginUser(req, res, user)
        return res.redirect('/');
      }
    }
    errors.push('Login failed for the provided email address and password');

  } else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('login', {
    title: 'Login',
    username,
    errors,
    csrfToken: req.csrfToken(),
  });
}));



/********************** USER LOGOUT ********************************/

router.post('/user/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/user/login');
});

module.exports = router;
