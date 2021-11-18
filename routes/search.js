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
    let { search } = req.body
    if (!search) {
        const results = await db.Potion.findAll({
            include: db.PotionType
        });
        res.render('search', { results });

    } else {
        search = search.charAt(0).toUpperCase() + search.slice(1);
        const results = await db.Potion.findAll({
            where: {
                name: { [Op.substring]: search }
            },
            include: db.PotionType
        });
        res.render('search', { results });
    }
}));




module.exports = router;
