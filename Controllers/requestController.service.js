const requestModel = require('../models/request.model.js')
const orderModel = require('../models/orders.model.js')


module.exports = {
    createOrders: async (req, res, next) => {
        try {
            const data = await orderModel.create(req.body)
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: "your request has been sent successfully" })

        } catch (error) {
            next(error)
        }
    },
    createRequests: async (req, res, next) => {
        try {
            const data = await orderModel.create(req.body)
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: "your request has been sent successfully" })

        } catch (error) {
            next(error)
        }
    },
    createRequest: async (req, res, next) => {
        try {
            const data = await requestModel.create(req.body)
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: "your request has been sent successfully" })

        } catch (error) {
            next(error)
        }
    },

    getRequests: async (req, res, next) => {
        try {
            const data = await requestModel.find({ user_id: req.params.userid }).populate('user_id').populate('medicine')
            // .populate('doctor_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },
    getOrders: async (req, res, next) => {
        try {
            const data = await orderModel.find({ user_id: req.params.userid }).populate('user_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },
    getAllRequests: async (req, res, next) => {
        try {
            const data = await requestModel.find().populate('user_id').populate('medicine')
            // .populate('doctor_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },
    getAllOrders: async (req, res, next) => {
        try {
            const data = await orderModel.find().populate('user_id')
            // .populate('doctor_id')
            if (!data) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ data: data })
        } catch (error) {
            next(error)
        }
    },

    requestUpdated: async (req, res, next) => {
        console.log(req.params);
        await requestModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json({ message: "user updated" })
    },
    orderUpdated: async (req, res, next) => {
        console.log(req.params);
        await orderModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json({ message: "user updated" })
    },



    deleteMedicine: async (req, res, next) => {
        try {
            const medicines = await medicineModel.deleteOne({ user_id: req.params.user_id, _id: req.headers.req_id })
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }
        catch (error) {
            next(error)
        }
    },



    deleteRequest: async (req, res, next) => {                                   
        console.log(req.headers.req_id);
        console.log(req.params.user_id);

        try {
            const result = await requestModel.deleteOne({ user_id: req.params.user_id, _id:req.headers.req_id })
            if (!result) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ message: "request is deleted" })
        }
        catch (err) {
            next(err)
        }

    },
    deleteOrders: async (req, res, next) => {
        console.log(req.headers.req_id);
        console.log(req.params.user_id,);

        try {
            const result = await orderModel.deleteOne({ _id: req.headers.req_id,user_id: req.params.user_id,})
            if (!result) {
                throw new Error("something went wrong");
            }
            res.status(200).json({ message: "request is deleted" })
        }
        catch (err) {
            next(err)
        }

    }
}

