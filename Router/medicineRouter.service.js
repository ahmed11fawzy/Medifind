const express = require('express')
const medicineRouter = express.Router()
const { medicineDataValidation, } = require('../Validators/medicineValidation/midicineValidation.js')
const { createMedicine, getMedicines } = require('../Controllers/medicineController.service.js')

medicineRouter.post("/medicine", medicineDataValidation, createMedicine)
    .get("/medicine", getMedicines)




module.exports = medicineRouter

