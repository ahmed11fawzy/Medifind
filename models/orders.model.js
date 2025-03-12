const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({

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
  
    doctor: {
        type: mongoose.ObjectId,
        ref: 'Users'
    },
    user_id: {
        type: mongoose.ObjectId,
        ref: 'Users',
        required: true
    },
}, { collection: 'orders' })

const orders = mongoose.model('orders', orderSchema)

module.exports = orders