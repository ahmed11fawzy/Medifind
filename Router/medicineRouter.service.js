const express = require('express')
const medicineRouter = express.Router()
const { medicineDataValidation, auth_privilege } = require('../Validators/medicineValidation/medicineValidation.js')

const { createMedicine, getMedicines, medicineUpdated, getAllNotExamineMedicine, getUserAddedMedicine, deleteMedicine, getAcceptedMedicines , decrementQuantity } = require('../Controllers/medicineController.service.js')


medicineRouter.post("/medicine", medicineDataValidation, createMedicine)
    .get("/medicine", getMedicines)
    .get("/medicine/:id", getUserAddedMedicine)
    .get("/added", auth_privilege, getAllNotExamineMedicine)
    .patch("/medicine/:id", medicineUpdated)
    .delete("/medicine/:user_id", deleteMedicine)
    .get("/acceptedMedicine", getAcceptedMedicines)
    .patch("/medicine/decrement/:name", decrementQuantity);



module.exports = medicineRouter

