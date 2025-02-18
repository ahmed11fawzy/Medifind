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
    },

    getRequests: async (req, res, next) => {
        try {
            const data = await requestModel.find().populate('user_id')
            // .populate('doctor_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },

    requestUpdated: async (req, res) => {
        console.log(req.params);
        await requestModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json({ message: "user updated" })
    },
}

