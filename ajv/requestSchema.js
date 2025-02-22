const Ajv = require('ajv').default
const mongoose = require('mongoose')
const ajv = new Ajv()

const requestSchema = {
    type: 'object',
    properties: {
        req_name: { type: 'string' },
        prescription_img: { type: 'string' },
        status: { type: 'boolean' },
        examined: { type: 'boolean' },
        requested: { type: 'boolean' },
        req_description: { type: 'string' },
        medicine: { type: 'string' },
        user_id: { type: 'string' },
    },
    required: ['medicine', 'user_id'],
    additionalProperties: true
}



ajv.compile(requestSchema)
module.exports = requestSchema