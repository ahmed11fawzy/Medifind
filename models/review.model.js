const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({

    status: {
        type: Boolean,
        required: false
    },
    examined: {
        type: Boolean,
        required: false
    },
    // doctor_id: {
    //     type: mongoose.ObjectId,
    //     ref: 'doctors'
    // },
    
    medicine_id: {
        type: mongoose.ObjectId,
        ref: 'medicine'
    }

}, { collection: 'review' })

const Review = mongoose.model('review', reviewSchema)

module.exports = Review