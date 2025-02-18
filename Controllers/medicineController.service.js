const medicineModel = require('../models/medicine.model.js')



module.exports = {
    createMedicine: (req, res, next) => {
        let medicine = new medicineModel({
            name: req.body.name,
            image_path: req.body.image_path,
            quantity: req.body.quantity,
            concentration: req.body.concentration,
            expire_date: req.body.expire_date,
            user_id: req.body.user_id
        })

        medicine.save()
            .then((data) => {
                console.log(data);
                res.json({ message: "medicine added" })
            })
            .catch((err) => {
                next(err)
            })
    },
    getMedicines: async (req, res, next) => {
        try {
            const medicines = await medicineModel.find().populate('user_id')
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }

        catch (error) {
            next(error)
        }





    },

    medicineUpdated: async (req, res) => {
        console.log(req.params);
        await medicineModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json({ message: "user updated" })
    },

}