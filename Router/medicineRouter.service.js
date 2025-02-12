const express = require('express')
const router= express.Router()
 
//ay 7aga

router.route('/addMedicine')
    .get((req, res,next) => {
        res.json({ data: [{},{},{}] })
        
    })
    .post((req, res,next) => {
        res.json({ message: "medicine added" })   
    })  
    





module.exports = router

