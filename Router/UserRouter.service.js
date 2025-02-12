const Router = require('express').Router()
const { userData, userId, loginDataValidation, signUpDataValidation, checkUserExists, checkUserNotExists } = require('../Validators/UserValidations/insertedData.js')
const { insertedUserErrors } = require('../Validators/UserValidations/validationResult.js')
const { getHomePage, getUsers, createUser, userUpdated, getSpecificUser } = require('../Controllers/UserController.service.js')
Router.get('/', getHomePage)
    .get('/users', getUsers)
    .patch('/user/:id', userId, insertedUserErrors, userUpdated)
    .post('/user', signUpDataValidation, checkUserNotExists, insertedUserErrors, createUser)
    .post('/login', loginDataValidation, checkUserExists, insertedUserErrors, getSpecificUser)

module.exports = Router