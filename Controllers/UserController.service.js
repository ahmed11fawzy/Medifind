const User = require('../models/userModel.js')
const userModel = require('../models/userModel.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    getHomePage: (req, res) => {
        res.json({ data: "home page" })
    },

    getUsers: (req, res, next) => {
        userModel.find()
            .then((users) => {

                res.status(200).json({ data: users })
            })
            .catch((err) => {
                next(err)
            })
        // res.json({ data: [{ name: 'ahmed', id: 1 }, { name: 'hambozo', id: 2 }, { name: 'reus', id: 3 }] })
    },

    createUser: async (req, res, next) => {
        let hashedPassword = await bcrypt.hash(req.body.password, 10)

        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })

        await user.save()

        res.status(200).json({ message: "user created" })
    },
    userUpdated: async (req, res) => {
        console.log(req.params);
        await userModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.status(200).json({ message: "user updated" })
    },
    getSpecificUser: async (req, res, next) => {
        try {
            const user = await userModel.findOne({ email: req.body.email })
            console.log(user);
            if (!user) {
                throw new Error('user not found')
            }
            let token = jwt.sign({ id: user._id, role: user.role }, 'secret')
            res.status(200)
            res.header('x-auth-token', token)
            res.json({ msg: "logged in successfully" })
        }
        catch (err) {
            next(err)
        }

    },
    getUser: (req, res, next) => {
        userModel.find({ _id: req.params.id })
            .then((users) => {

                res.status(200).json({ data: users })
            })
            .catch((err) => {
                next(err)
            })
    },
}

