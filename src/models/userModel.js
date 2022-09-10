const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    }, 
    emailAddress: {
        type: String,
        required: true,
    },orderHistory: {
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

module.exports =  User;