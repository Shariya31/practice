const mongoose = require('mongoose')
const {Schema} = mongoose

const menuItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    taste: {
        type: String,
        enum: ['spicy', 'sweet', 'mixed'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    is_drinks: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const menuItem = mongoose.model('menuItem', menuItemSchema)

module.exports = menuItem