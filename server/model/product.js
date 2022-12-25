const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    image_url: String,
    category:String,
    color:String,
});

module.exports = mongoose.model('product', productSchema)