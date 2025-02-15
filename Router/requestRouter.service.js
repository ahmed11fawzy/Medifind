const express = require('express')
const requestRouter = express.Router()
const { requestValidation } = require('../Validators/requestValidation/requestValidation.js')
const { createRequest, getRequests } = require('../Controllers/requestController.service.js')
requestRouter.post('/request', requestValidation, createRequest)
    .get('/request', getRequests)
module.exports = requestRouter