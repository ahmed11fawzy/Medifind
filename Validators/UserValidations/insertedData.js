const { body, param, query } = require('express-validator')
const userModel = require('../../models/userModel.js')
const mongoose = require('mongoose')
const Ajv = require('ajv').default
const ajv = new Ajv()
const bcrypt = require('bcrypt')
const loginSchema = require('../../ajv/loginSchema')
const RegisterSchema = require('../../ajv/registrationSchema')
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
    ],
    loginDataValidation: [
        (req, res, next) => {
            const isValid = ajv.validate(loginSchema, req.body);
            if (!isValid) {
                next(new Error(ajv.errorsText()));
            }
            next();
        }
    ],
    signUpDataValidation: [
        (req, res, next) => {
            const isValid = ajv.validate(RegisterSchema, req.body);
            if (!isValid) {
                next(new Error(ajv.errorsText()));
            }
            next();
        }
    ],
    checkUserExists: [
        (req, res, next) => {
            const email = req.body.email;
            userModel.findOne({ email: email })
                .then(async (user) => {
                    if (user) {
                        let validPassword = await bcrypt.compare(req.body.password, user.password)
                        if (!validPassword) {
                            next(new Error('invalid password'))
                        }

                    }
                    next();
                })
                .catch((err) => {
                    next(err);
                });
        }
    ],
    checkUserNotExists: [
        (req, res, next) => {
            const email = req.body.email;
            userModel.findOne({ email: email })
                .then((user) => {
                    if (user) {
                        next(new Error('user already exists'));
                    }
                    next();
                })
                .catch((err) => {
                    next(err);
                });
        }
    ]

}