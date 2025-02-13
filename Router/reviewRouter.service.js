const express = require('express')
const reviewRouter = express.Router()
const { reviewValidation } = require('../Validators/reviewValidation/reviewValidation.js')
const { createReview } = require('../Controllers/reviewController.service.js')

reviewRouter.post('/review', reviewValidation, createReview)
module.exports = reviewRouter