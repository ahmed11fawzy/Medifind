const express = require('express')
const medicineRouter = express.Router()
const { medicineDataValidation } = require('../Validators/medicineValidation/midicineValidation.js')
const { createMedicine,getMedicine } = require('../Controllers/medicineController.service.js')

medicineRouter.post("/medicine", medicineDataValidation, createMedicine)
             .get("/getAllMedicine", getMedicine)




module.exports = medicineRouter

