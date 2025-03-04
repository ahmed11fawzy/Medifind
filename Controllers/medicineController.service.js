const medicineModel = require('../models/medicine.model.js')



module.exports = {
    createMedicine: (req, res, next) => {
        let medicine = new medicineModel({
            name: req.body.name,
            image_path: req.body.image_path,
            quantity: req.body.quantity,
            concentration: req.body.concentration,
            expire_date: req.body.expire_date,
            user_id: req.body.user_id,
            examine: req.body.examine,
            status: req.body.status
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
    getAllExamineMedicine: async (req, res, next) => {
        try {
            const medicines = await medicineModel.find({ examine: true }).populate('user_id')
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }
        catch (error) {
            next(error)
        }
    },
    getAllNotExamineMedicine: async (req, res, next) => {
        try {
            const medicines = await medicineModel.find({ examine: false }).populate('user_id')
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }
        catch (error) {
            next(error)
        }
    },
    getUserAddedMedicine: async (req, res, next) => {
        try {
            const medicines = await medicineModel.find({ user_id: req.params.id }).populate('user_id')
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }
        catch (error) {
            next(error)
        }
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

    getAcceptedMedicines: async (req, res, next) => {
        try {
            const medicines = await medicineModel.find({ status: true }).populate('user_id')
            if (!medicines) {
                throw new Error('something went wrong')
            }
            res.status(200).json({ data: medicines })
        }
        catch (error) {
            next(error)
        }
    },


    decrementQuantity: async (req, res, next) => {
  try {
    const result = await medicineModel.findOneAndUpdate(
      { name: req.params.name, quantity: { $gt: 0 } },
      { $inc: { quantity: -1 } },
      { new: true }
    );
    
    if (!result) {
      return res.status(400).json({ 
        message: "Medicine not found or quantity already zero" 
      });
    }
    
    if (result.quantity === 0) {
      await medicineModel.updateOne(
        { _id: result._id },
        { examine: true }
      );

    }
    
    res.status(200).json({ message: "Quantity decremented" });
  } catch (error) {
    next(error);
  }
}
}