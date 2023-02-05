const express = require("express");
const router = express.Router();
const { Product } = require("../models/productModel");
const { OtherSeller } = require("../models/ListProductModel");

router.post("/add_product", async (request, response) => {
    const product = new Product(request.body);

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/products", async (request, response) => {

    Product.find({}).then((data) => {
        // console.log(data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });

    // response.json(data);
});

// Find products by ID -> On Click
router.get("/products/:id", async (request, response) => {
    var id = request.params.id;
    console.log(id);

    Product.findById(id).then((data) => {
        // console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });
});

// Find list of other sellers from games
router.get("/OtherSeller/:productID", async (request, response) => {
    var productID = request.params.productID;

    OtherSeller.find({ productID: productID }).then((data) => {
        response.json(data);
    }).catch((error) => {

    });
})

module.exports = router;