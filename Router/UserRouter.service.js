const Router = require('express').Router()
const { userData, userId } = require('../Validators/UserValidations/insertedData.js')
const { insertedUserErrors } = require('../Validators/UserValidations/validationResult.js')
const { getHomePage, getUsers, createUser, userUpdated } = require('../Controllers/UserController.service.js')
Router.get('/', getHomePage)
    .get('/users', getUsers)
    .patch('/user/:id', userId, insertedUserErrors, userUpdated)
    .post('/user', userData, insertedUserErrors, createUser)

module.exports = Router