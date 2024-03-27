const mongoose = require('mongoose')
const {Schema} = mongoose

const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager']
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuqired: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})

const person = mongoose.model('person', personSchema)
module.exports = person