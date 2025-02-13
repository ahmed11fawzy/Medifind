const reviewSchema = require('../../ajv/reviewSchema.js')
const Ajv = require('ajv').default
const ajv = new Ajv()

module.exports = {
    reviewValidation: [
        (req, res, next) => {
            const isValid = ajv.validate(reviewSchema, req.body);
            if (!isValid) {
                next(new Error(ajv.errorsText()));
            }
            next();
        }
    ]
}