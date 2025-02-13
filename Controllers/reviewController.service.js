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
    }
}