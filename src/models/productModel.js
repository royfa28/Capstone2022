const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    }
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;