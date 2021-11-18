const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const commentsArray = await db.Comment.findAll({
        where: {
            potion_id: req.params.id
        },
        include: db.User
    });
}));
