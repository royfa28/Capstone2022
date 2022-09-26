const router = require("express").Router();
const { ListProduct } = require("../models/ListProductModel");

router.post("/:product", async (request, response) => {

    try {
        await new ListProduct({
            productID: request.body.productID,
            productPrice: request.body.productPrice,
            emailAddress: request.body.emailAddress,
        }).save();
        response.status(201).send({ message: "Product listed" })
    } catch (error) {
        response.status(500).send({ message: error });
    }
})

module.exports = router;