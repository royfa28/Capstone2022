const mongoose = require("mongoose");

const ListProductSchema = new mongoose.Schema({
    productID: { type: String },
    productPrice: { type: Number },
    emailAddress: { type: String }
}, { collection: "productsListed" });

const OtherSeller = mongoose.model("Sellers", ListProductSchema);

module.exports = { OtherSeller };