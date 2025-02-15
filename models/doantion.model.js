const mongoose = require('mongoose')


const donationSchema = new mongoose.Schema({

    donation_id: mongoose.ObjectId,
    image: String,
    quantity: Number,
    medicine_name: String,
    concentration: String,
    expire_date: Date,
    user_id: {
        type: mongoose.ObjectId,
        ref: 'Users'
    },
    review_id: {
        type: mongoose.ObjectId,
        ref: 'review'
    },


}, { collection: 'donation' })

const donation = mongoose.model('donation', donationSchema)
