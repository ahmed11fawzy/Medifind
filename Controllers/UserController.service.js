const userModel = require('../models/userModel.js')

module.exports = {
    getHomePage: (req, res) => {
        res.json({ data: "home page" })
    },

    getUsers: (req, res, next) => {
        userModel.find()
            .then((users) => {
                console.log(users);
                res.status(200).json({ data: users })
            })
            .catch((err) => {
                next(err)
            })
        // res.json({ data: [{ name: 'ahmed', id: 1 }, { name: 'hambozo', id: 2 }, { name: 'reus', id: 3 }] })
    },

    createUser: (req, res) => {
        console.log(req.body);
        userModel.create(req.body)
        res.json({ message: "user created" })
    },
    userUpdated: async (req, res) => {
        console.log(req.params);
        await userModel.updateOne({ _id: req.params.id }, { $set: req.body })

        res.json({ message: "user updated" })
    }
}

