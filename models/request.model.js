const mongoose = require('mongoose')

const requestSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    req_name: String,
    prescription_img: String,
    status: Boolean,
    req_date: Date,
    doctor_id: mongoose.Schema.Types.ObjectId,
    user_id: mongoose.Schema.Types.ObjectId

}, { collection: 'Medicine' })

const Request = mongoose.model('request', requestSchema)