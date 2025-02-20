const Ajv = require('ajv').default
const ajv = new Ajv()

const medicineSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        image_path: { type: 'string' }, //need to be required
        quantity: { type: 'number' },
        concentration: { type: 'string' },
        expire_date: { type: 'string' },
        examine: { type: 'boolean' },
        status: { type: 'boolean' },
        user_id: { type: 'string' },
    },
    required: ['name', 'concentration'],
    additionalProperties: true
}

ajv.compile(medicineSchema)
module.exports = medicineSchema 