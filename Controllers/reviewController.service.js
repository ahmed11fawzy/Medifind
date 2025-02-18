const reviewModel = require('../models/review.model.js')


module.exports = {
    createReview: async (req, res) => {
        try {   
            const data = await reviewModel.create(req.body)
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json("your request has been sent")    
        } catch (error) {
            next(error)
        }
    },

    getReviews: async (req, res, next) => {
        try {
            const data = await requestModel.find().populate('medicine_id')
            // .populate('doctor_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },
}