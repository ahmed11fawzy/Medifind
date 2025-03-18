require('dotenv').config()
const express = require('express')
const Router = require('./Router/UserRouter.service.js')
const server = express()
const mongoose = require('mongoose')
const medicineRouter = require('./Router/medicineRouter.service.js')
const requestRouter = require('./Router/requestRouter.service.js')
const reviewRouter = require('./Router/reviewRouter.service.js')
const cors = require('cors');
const compression = require('compression')
server.use(cors())
server.use(compression())
mongoose.connect(process.env.MONGODB_URI)
    .then(async (data) => {
        console.log('db connected');
        const collections = await data.connection.db.listCollections().toArray();
        // console.log(collections);
        const port = process.env.PORT || 4000
        server.listen(port, () => {
            console.log('server is running on port ', port);
        })

    })
    .catch((err) => {
        console.log(err);
    })

// Handle server middleware
// $1-middleware   // Allow all origins

server.use(cors({
    exposedHeaders: ["x-auth-token"],
}));

server.use((req, res, next) => {
    console.log('logging Mw 1');
    next();
});

// $2-middleware
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Expose-Headers", "x-auth-token"); // Expose x-auth-token
    next()
})

// $3-body parser
server.use(express.json())

// $4- Routing middleware
server.use(Router);
server.use(medicineRouter);
server.use(requestRouter);
server.use(reviewRouter);

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






