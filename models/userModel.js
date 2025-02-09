const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    location: String,
    ssn: Number,
    phone: Number,
}, { collection: 'Users' })

const User = mongoose.model('Users', userSchema)

module.exports = User