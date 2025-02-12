const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    description: String,
    image: String
}, { collection: 'medicine' })

const Medicine = mongoose.model('Medicine', medicineSchema)

module.exports = Medicine;