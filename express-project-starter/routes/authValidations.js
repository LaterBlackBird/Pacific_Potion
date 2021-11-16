const { check } = require('express-validator');
const db = require('../db/models');

const userValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Username')
        .isLength({ max: 20 })
        .withMessage('Username must not be more than 20 characters long'),
    check('emailAddress')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address')
        .isLength({ max: 255 })
        .withMessage('Email Address must not be more than 255 characters long')
        .isEmail()
        .withMessage('Email Address is not a valid email')
        .custom((value) => {
            return db.User.findOne({ where: { email: value } })
                .then((user) => {
                    if (user) {
                        return Promise.reject('The provided Email Address is already in use by another account');
                    }
                });
        }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password value does not match Password');
            }
            return true;
        }),
];


const loginValidators = [
    check('emailAddress')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email Address'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password'),
];

module.exports = {
    userValidators,
    loginValidators
}
