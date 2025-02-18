const express = require('express')
const requestRouter = express.Router()
const { requestValidation } = require('../Validators/requestValidation/requestValidation.js')
const { createRequest, getRequests , requestUpdated} = require('../Controllers/requestController.service.js')
requestRouter.post('/request', requestValidation, createRequest)
             .get('/request', getRequests)
             .patch('/request/:id', requestUpdated)
module.exports = requestRouter