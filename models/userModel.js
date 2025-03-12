const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ["admin", "user", "doctor"],
        default: "user"
    },
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate: {
            validator: (value) => {
                return /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(value)
            },
            message: 'Invalid password format'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
            },
            message: 'Invalid email format'
        }
    },
    location: String,
    ssn: {
        type: Number,
        unique: true,
        minlength: 14,
        validate: {
            validator: (value) => {
                return /^\d{14}$/.test(value)
            },
            message: 'Invalid SSN format'
        }
    },
    phone: {
        type: Number,
        unique: true,
        minlength: 10,
        validate: {
            validator: (value) => {
                return /^\d{10}$/.test(value)
            },
            message: 'Invalid phone number format'
        }
    },
     profileImage: {
        type: String,
        // required: true
    },
}, { collection: 'Users' })

const Users = mongoose.model('Users', userSchema)

module.exports = Users