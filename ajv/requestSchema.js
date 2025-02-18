const Ajv = require('ajv').default

const ajv = new Ajv()

const requestSchema = {
    type: 'object',
    properties: {
        req_name: { type: 'string' },
        prescription_img: { type: 'string' },
        status: { type: 'boolean' },
        examined: { type: 'boolean' },
        req_date: { type: 'string' },
        req_description: { type: 'string' }, //added
        // doctor_id: { type: 'string' },
        user_id: { type: 'string' },
    },
    required: ['req_name', 'req_description'],
    additionalProperties: false
}

ajv.compile(requestSchema)
module.exports = requestSchema