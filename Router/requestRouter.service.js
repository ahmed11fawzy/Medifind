const express = require('express')
const requestRouter = express.Router()
const { requestValidation } = require('../Validators/requestValidation/requestValidation.js')
const { createRequest, createOrders, getAllRequests, getRequests, requestUpdated, deleteRequest } = require('../Controllers/requestController.service.js')
requestRouter.post('/orders', createOrders)    //,
    .get('/request', getAllRequests)
    .get('/request/:userid', getRequests)
    .patch('/request/:id', requestValidation, requestUpdated)
    .delete('/request/', deleteRequest)
    .post('/request', requestValidation, createRequest)
module.exports = requestRouter