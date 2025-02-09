const { body, param, query } = require('express-validator')
const mongoose = require('mongoose')
module.exports = {
    userData: [
        // body('id').isInt().withMessage('id must be a number'),
        body('name').isString().withMessage('name must be a string'),
        body('name').isLength({ min: 3 }).withMessage('name must be at least 3 chars long'),

    ]
    ,
    userId: [

        (req, res, next) => {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                next(new Error('id is not valid'));
            }
            next();
        }
    ]
}