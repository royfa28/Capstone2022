const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
    productID: { type: String },
    productPrice: { type: Number },
    qty: { type: Number }
});

const ShoppingCartSchema = new mongoose.Schema({
    emailAddress: { type: String },
    orderDate: { type: String },
    totalPrice: { type: Number },
    // Array of subdocuments
    orderDetails: [OrderDetailsSchema],
}, { collection: "orders" });

const ShoppingCart = mongoose.model("orders", ShoppingCartSchema);

module.exports = { ShoppingCart }