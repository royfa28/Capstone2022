const mongoose = require("mongoose");

const ListProductSchema = new mongoose.Schema({
    productID: { type: String },
    productPrice: { type: Number },
    emailAddress: { type: String }
}, { collection: "productsListed" });

const ListProduct = mongoose.model("products", ListProductSchema);

module.exports = { ListProduct }