const mongoose = require('mongoose')


const donationSchema = new mongoose.Schema({

    donation_id: mongoose.Schema.Types.ObjectId,
    image: String,
    quantity: Number,
    medicine_name: String,
    concentartion: String,
    expire_date: Date,
    user_id: mongoose.Schema.Types.ObjectId,
    review_id: mongoose.Schema.Types.ObjectId,

  
}, { collection: 'donation' })

const User = mongoose.model('donation', donationSchema)
