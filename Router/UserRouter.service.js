const Router = require('express').Router()
const { userId, loginDataValidation, signUpDataValidation, checkUserExists, checkUserNotExists } = require('../Validators/UserValidations/insertedData.js')
const { insertedUserErrors } = require('../Validators/UserValidations/validationResult.js')
const { getHomePage, getUsers, createUser, userUpdated, getSpecificUser , getUser} = require('../Controllers/UserController.service.js')
Router.get('/', getHomePage)
    .get('/users', getUsers)
    .patch('/user/:id', userId, insertedUserErrors, userUpdated)                                  // dpdate ypur profile (add more information)
    .post('/register', signUpDataValidation, checkUserNotExists, insertedUserErrors, createUser)     //register
    .post('/login', loginDataValidation, checkUserExists, insertedUserErrors, getSpecificUser)  //login
    .get('/user/:id', getUser)

module.exports = Router