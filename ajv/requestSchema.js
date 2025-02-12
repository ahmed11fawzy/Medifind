const Ajv = require('ajv').default

const ajv = new Ajv()

const requestSchema = {
    type: 'object',
    properties: {
        req_name: { type: 'string' },
        prescription_img: { type: 'string' },
        status: { type: 'boolean' },
        req_date: { type: 'string' },
        doctor_id: { type: 'string' },
        user_id: { type: 'string' },
    },
    required: ['req_name', 'prescription_img', 'req_date', 'doctor_id', 'user_id'],
    additionalProperties: false
}

ajv.compile(requestSchema)
module.exports = requestSchema