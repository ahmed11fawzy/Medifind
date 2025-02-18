const express = require('express')
const medicineRouter = express.Router()
const { medicineDataValidation, } = require('../Validators/medicineValidation/midicineValidation.js')
const { createMedicine, getMedicines, medicineUpdated } = require('../Controllers/medicineController.service.js')

medicineRouter.post("/medicine", medicineDataValidation, createMedicine)
    .get("/medicine", getMedicines)
    .patch("/medicine/:id", medicineUpdated)




module.exports = medicineRouter

