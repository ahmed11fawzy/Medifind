const express = require('express')
const requestRouter = express.Router()
const { requestValidation } = require('../Validators/requestValidation/requestValidation.js')
const { createRequest, createOrders, getAllRequests,getAllOrders, getRequests,getOrders, requestUpdated, orderUpdated,deleteRequest } = require('../Controllers/requestController.service.js')
requestRouter.post('/orders', createOrders)  
            .patch('/orders/:id', orderUpdated)
            .get('/orders', getAllOrders)
            .get('/orders/:userid', getOrders)
            .get('/request', getAllRequests)
            .get('/request/:userid', getRequests)
            .patch('/request/:id',  requestUpdated)    //  deleted the validator
            .delete('/request/', deleteRequest)
            .post('/request', requestValidation, createRequest)
module.exports = requestRouter