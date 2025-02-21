const Ajv = require('ajv').default

const ajv = new Ajv();

const reviewSchema = {
    type: 'object',
    properties: {
        status: { type: 'boolean' },
        examine: { type: 'boolean' },  //
        // doctor_id: { type: 'string' },
        medicine_id: { type: 'string' },
    },
    required: ['status', 'examined' ],       
    additionalProperties: true,
}

ajv.compile(reviewSchema)
module.exports = reviewSchema