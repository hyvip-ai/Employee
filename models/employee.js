const mongoose = require("mongoose")
const Schema = mongoose.Schema
const employeeSchema = Schema({
    ID:Number,
    Name:String,
    Email:String,
    PhoneNumber:String
})

module.exports = mongoose.model('Employee',employeeSchema)