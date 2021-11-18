const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const router = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op;


router.post('/', asyncHandler(async (req, res) => {
    const { search } = req.body
    if (!search) {
        const results = await db.Potion.findAll({
            include: db.PotionType
        });
        res.render('search', { results });

    } else {
        const results = await db.Potion.findAll({
            where: {
                name: {
                    [Op.iLike]: search
                }
            },
            include: db.PotionType
        });
        res.render('search', { results });
    }
}));




module.exports = router;
