const Ajv = require('ajv').default
const ajv = new Ajv()

const medicineSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        image_path: { type: 'string' },
        quantity: { type: 'number' },
        concentration: { type: 'string' },
        expire_date: { type: 'string' },
        user_id: { type: 'string' },
    },
    required: ['name', 'image_path', 'concentration', 'user_id'],
    additionalProperties: false
}

ajv.compile(medicineSchema)
module.exports = medicineSchema 