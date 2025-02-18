const mongoose = require('mongoose')
// const { required } = require('../ajv/loginSchema')
const { required } = require('../ajv/loginSchema')
const requestSchema = new mongoose.Schema({

    req_name: {
        type: String,
        required: true
    },
    prescription_img: {
        type: String,
        // required: true
    },
    req_description: {
        type: String,
        // required: true
    },
    req_description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    },
    examined: {
        type: Boolean,
        required: false
    },
    req_date: {
        type: Date
        
    },
    


    // doctor_id: {
    //     type: mongoose.ObjectId,
    //     ref: 'Doctor'
    // },

   
    user_id: {
        type: mongoose.ObjectId,
        ref: 'Users'
    },

}, { collection: 'request' })

const Request = mongoose.model('request', requestSchema)

module.exports = Request