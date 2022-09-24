const mongoose = require("mongoose");

const OrderDetailsSchema = new mongoose.Schema({
    productID: { type: String },
    productPrice: { type: Number },
    qty: { type: Number },
    productTitle: { type: String }
});

const OrderSchema = new mongoose.Schema({
    emailAddress: { type: String },
    orderDate: { type: String },
    totalPrice: { type: Number },
    // Array of subdocuments
    orderDetails: [OrderDetailsSchema],
    orderID: {type: Number},
}, { collection: "orders" });

const Order = mongoose.model("orders", OrderSchema);

module.exports = { Order }