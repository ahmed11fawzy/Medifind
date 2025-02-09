const express = require('express')
const Router = require('./Router/UserRouter.service.js')
const server = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://af6394158:k7CaJle7ibhA1wcW@medifind.zasc3.mongodb.net/MediFind').then(async (data) => {
    console.log('db connected');
    const collections = await data.connection.db.listCollections().toArray();
    // console.log(collections);
    server.listen(7777, () => {
        console.log('server is running on port 7777');
    })



})
    .catch((err) => {
        console.log(err);
    })







// Handle server middleware


// $1-middleware  
server.use((req, res, next) => {
    console.log('logging Mw 1');
    next()
})
// $2-middleware
server.use((req, res, next) => {
    console.log('Auth Mw 2');
    next()
})

// $3-body parser
server.use(express.json())

// $4- Routing middleware
server.use(Router)



// $5-middleware
server.use((req, res, next) => {
    res.status(404).send('Not Found')
    next()
})

// $6-middleware
server.use((error, req, res, next) => {
    res.status(error.status || 500).json({ data: "error accrued " + error })
    next()
})






