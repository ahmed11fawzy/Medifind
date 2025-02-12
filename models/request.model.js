const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({

    req_name: {
        type: String,
        required: true
    },
    prescription_img: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: false
    },
    req_date: Date,
    doctor_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId

}, { collection: 'request' })

const Request = mongoose.model('request', requestSchema)

module.exports = Request