const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image_path: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    concentration: {
        type: String,
        required: true
    },
    expire_date: {
        type: Date,
        required: false
    },
    user_id: mongoose.Schema.Types.ObjectId

}, { collection: 'medicine' })

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine;