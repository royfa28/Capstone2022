const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    }, 
    emailAddress: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        default: "",
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
});

const User = mongoose.model("User", UserSchema);

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        required: true,
    }
});

const Product = mongoose.model("Products", ProductSchema);

module.exports =  User;