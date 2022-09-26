const router = require("express").Router();
const { OtherSeller } = require("../models/ListProductModel");


router.post("/:product", async (request, response) => {

    try {
        await new OtherSeller({
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