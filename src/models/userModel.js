const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
    }, 
    // orderHistory: {
    //     type: Object,
    //     required: false,
    // },
    password: {
        type: String,
        required: true,
    },
    // address: {
    //     type: String,
    //     required: false,
    //     default: "",
    // },
    phoneNumber: {
        type: Number,
        required: true,
    }
}, { collection: "users" }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };