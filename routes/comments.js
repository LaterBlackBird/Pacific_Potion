const express = require('express');
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, logoutUser } = require('../auth')
const { userValidators, loginValidators } = require('./authValidations')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const router = express.Router();

//error handling

//when editing or deleting a comment, it was not found in the database
const commentNotFound = (commentId) => {
    const err = Error(`Comment with id of ${commentId} could not be found.`);
    err.title = "Comment not found.";
    err.status = 404;
    return err;
}

//use this to make sure that an edited comment is not empty
const validateComment = [
    check("comment")
        .exists({ checkFalsy: true })
        .withMessage("Comment cannot be empty."),
];


/***************** DELETE A COMMENT **********************/
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const commentId = req.params.id;

    //find the comment being deleted
    const commentRecord = await Comment.findByPk(commentId);

    //make sure the comment was found in the database
    if (commentRecord) {
        //destroy record
        await commentRecord.destroy()
        res.status(204).end();
    //handle error if comment is not found in database
    } else next(commentNotFound(commentId));
}));



/***************** EDIT A COMMENT **********************/
router.put("/:id(\\d+)", validateComment, asyncHandler(async (req, res) => {
    const commentId = req.params.id

    //find the comment being edited
    const comment = await Comment.findByPk(commentId)

    //update the comment in the database
    if (comment) {
        await comment.update({ comment: req.body.comment });
        res.status(202).json({ comment });
    //handle error if comment is not found in database
    } else {
        next(commentNotFound(commentId));
    }
}));

module.exports = router
