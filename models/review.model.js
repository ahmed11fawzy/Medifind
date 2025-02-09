const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    status: Boolean,
    examined: Boolean,
    doctor_id: mongoose.Schema.Types.ObjectId,
    medicine_id: mongoose.Schema.Types.ObjectId,
}, { collection: 'Reviews' })

const Review = mongoose.model('Reviews', reviewSchema)

module.exports = Review