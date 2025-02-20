const requestSchema = require('../../ajv/requestSchema.js')
const Ajv = require('ajv').default
const ajv = new Ajv()

module.exports = {
    requestValidation:
        (req, res, next) => {
            const isValid = ajv.validate(requestSchema, req.body);
            if (!isValid) {
                console.log(ajv.errorsText());
                next(new Error(ajv.errorsText()));
            }
            next();
        }

}