const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://lorendrain47:WEDTH123@cluster0.diyvo.mongodb.net/HotelBookingSystem'

mongoose.connect(mongoURL , {useUnifiedTopology : true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', () =>{
    console.log('Mongo DB Connection failed')
})

connection.on('connected' , () =>{
    console.log("Mongo DB Connection Successful")
} )

module.exports = mongoose