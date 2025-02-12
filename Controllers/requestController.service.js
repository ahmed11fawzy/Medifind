const requestModel = require('../models/request.model.js')



module.exports = {
    createRequest: async (req, res) => {
        try {
            const data = await requestModel.create(req.body)
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json("your request has been sent")

        } catch (error) {
            next(error)
        }
    }
}

