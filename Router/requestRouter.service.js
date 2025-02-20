const express = require('express')
const requestRouter = express.Router()
const { requestValidation } = require('../Validators/requestValidation/requestValidation.js')
const { createorders, getAllRequests, getRequests, requestUpdated, deleteRequest } = require('../Controllers/requestController.service.js')

requestRouter.post('/orders',createorders)    //,
    .get('/request', getAllRequests)
    .get('/request/:userid', getRequests)
    .patch('/request/:id', requestValidation,requestUpdated)
    .delete('/request/', deleteRequest)
module.exports = requestRouter