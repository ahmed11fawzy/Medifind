
const mongoose = require('mongoose')
const Ajv = require('ajv').default
const ajv = new Ajv();
const medicineSchema = require('../../ajv/medicineSchema.js')
const jwt = require('jsonwebtoken');


module.exports = {
    medicineDataValidation:
        (req, res, next) => {
            const isValid = ajv.validate(medicineSchema, req.body);
            if (!isValid) {
                console.log(ajv.errorsText());
                next(new Error(ajv.errorsText()));
            }
            next();
        }
    ,
    auth_privilege:
        (req, res, next) => {
            try {
                // Get token from headers
                const token = req.headers.auth_token;
                console.log(token)
                if (!token) {
                    return res.status(401).json({ message: "Unauthorized: No token provided" });
                }

                // Verify token
                const decoded = jwt.verify(token, 'secret');
                console.log('de', decoded)
                if (decoded.role !== "doctor")
                    throw new Error('you do not have permission ')
                else
                    next();
            }
            catch (err) {
                next(err)
            }
        }



}
