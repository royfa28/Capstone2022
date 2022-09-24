const express = require("express");
const router = express.Router();
const productModel = require("../models/productModel");

router.post("/add_product", async (request, response) => {
    const product = new productModel(request.body);

    try {
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/products", async (request, response) => {

    productModel.find({}).then((data) => {
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

    productModel.findById(id).then((data) => {
        console.log("Data: ", data);
        response.json(data);
    }).catch((error) => {
        console.log("error", error);
    });
});

module.exports = router;