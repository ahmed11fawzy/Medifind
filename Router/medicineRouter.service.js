const express = require('express')
const medicineRouter = express.Router()
const { medicineDataValidation } = require('../Validators/medicineValidation/midicineValidation.js')
const { createMedicine } = require('../Controllers/medicineController.service.js')

medicineRouter.post("/medicine", medicineDataValidation, createMedicine)





module.exports = medicineRouter

