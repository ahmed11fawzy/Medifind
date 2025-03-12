const mongoose = require('mongoose')
// const { required } = require('../ajv/loginSchema')
const { required } = require('../ajv/loginSchema')
const requestSchema = new mongoose.Schema({

    req_name: {
        type: String,
    },
    prescription_img: {
        type: String,
    },
    req_description: {
        type: String,
    },
    status: {
        type: Boolean,
        required: false
    },
    examined: {
        type: Boolean,
        required: false
    },
    
    requested: {
        type: Boolean,
        required: false
    },
    req_date: {
        type: Date,
        default: Date.now
    },
    medicine: {
        type: mongoose.ObjectId,
        ref: 'Medicine'
    },
    doctor: {
        type: mongoose.ObjectId,
        ref: 'Users'
    },
    user_id: {
        type: mongoose.ObjectId,
        ref: 'Users'
    },
}, { collection: 'request' })

const Request = mongoose.model('request', requestSchema)

module.exports = Request