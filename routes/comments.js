const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();

router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    console.log('Inside post route')
    const { userId } = req.session.auth;
    console.log(userId);
    await Comment.create({
        comment: req.body,
        user_id: userId,
        potion_id: req.params.id
    });
}))

module.exports = router;
