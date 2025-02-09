const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
    name: String,
    password: String,
    email: String,
    authirty_id: Number
}, { collection: 'doctors' })

const doctor = mongoose.model('doctors', doctorSchema)

module.exports = doctor