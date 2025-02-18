const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
        unique: true
    },
    image_path: {
        type: String,
        // required: true
    },
    quantity: {
        type: Number,
        required: false
    },
    concentration: {
        type: String,
        // required: true
    },
    expire_date: {
        type: Date,
        required: false
    },
    examine: {
        type: Boolean,
        required: false
    },
    status: {
        type: Boolean,
        required: false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }

}, { collection: 'medicine' })

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine;