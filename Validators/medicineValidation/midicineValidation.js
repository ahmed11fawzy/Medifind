
const mongoose = require('mongoose')
const Ajv = require('ajv').default
const ajv = new Ajv();
const medicineSchema = require('../../ajv/medicineSchema.js')


module.exports = {
    medicineDataValidation: [
        (req, res, next) => {
            const isValid = ajv.validate(medicineSchema, req.body);
            if (!isValid) {
                next(new Error(ajv.errorsText()));
            }
            next();
        }
    ]
 
}
