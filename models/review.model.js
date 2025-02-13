const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({

      status: {
        type: Boolean,
        required: false
    },
    examined: {  type: Boolean,
                 required: false
             },
    doctor_id: mongoose.Schema.Types.ObjectId,
    medicine_id: mongoose.Schema.Types.ObjectId

}, { collection: 'review' })

const Review = mongoose.model('review', reviewSchema)

module.exports = Review