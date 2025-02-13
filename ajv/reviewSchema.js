const Ajv = require('ajv').default

const ajv = new Ajv();

const reviewSchema = {
    type: 'object',
    properties: {
        status: { type: 'boolean' },
        examined: { type: 'boolean' },
        doctor_id: { type: 'string' },
        medicine_id: { type: 'string' },
    },
    required: ['status', 'examined', 'doctor_id', 'medicine_id'],       
    additionalProperties: false
}

ajv.compile(reviewSchema)
module.exports = reviewSchema