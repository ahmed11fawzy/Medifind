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
    }

}