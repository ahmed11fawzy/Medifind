const Ajv = require('ajv').default;
const ajv = new Ajv()

const RegisterSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string', "pattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
        password: { type: 'string', minLength: 8, "pattern": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$" },
        location: { type: 'string' },
        ssn: { type: 'number' },
        phone: { type: 'number' },
        

    },
    required: ['name', 'email', 'password',],
    additionalProperties: false
}
ajv.compile(RegisterSchema)
module.exports = RegisterSchema