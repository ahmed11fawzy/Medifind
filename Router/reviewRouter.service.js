const express = require('express')
const reviewRouter = express.Router()
const { reviewValidation } = require('../Validators/reviewValidation/reviewValidation.js')
const { createReview , getReviews} = require('../Controllers/reviewController.service.js')

reviewRouter.post('/review', reviewValidation, createReview)
            .get('/review', getReviews)
module.exports = reviewRouter