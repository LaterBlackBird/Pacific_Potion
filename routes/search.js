const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const results = await db.Potion.findAll();
    res.render('search', { results });
}));




module.exports = router;
